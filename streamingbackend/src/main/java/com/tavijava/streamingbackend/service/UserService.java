package com.tavijava.streamingbackend.service;

import com.tavijava.streamingbackend.persistance.dto.UserDto;
import com.tavijava.streamingbackend.persistance.model.Role;
import com.tavijava.streamingbackend.persistance.model.UserModel;
import com.tavijava.streamingbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    public void add(UserDto userDto){
        UserModel userModel = getModel(userDto);
        checkFirstUserAndSetRoleInitial(userDto);
        userModel.setPassword(bcryptEncoder.encode(userDto.getPassword()));
        if (!ifUserIsRegistred(userModel.getEmail())){
            userRepository.save(userModel);
        }
    }
    public void update(UserDto userDto){
        userRepository.save(getModel(userDto));
    }
    public void delete(long id){
        userRepository.deleteById(id);
    }
    public List<UserDto> getAll(){
        List<UserDto> userDtos = new ArrayList<>();
        List<UserModel> userModels = userRepository.findAll();
        for (UserModel userModel: userModels){
            userDtos.add(getDto(userModel));
        }
        return userDtos;
    }
    public UserDto getOne(long id){
        UserModel userModel = new UserModel();
        Optional<UserModel> userModelOptional = userRepository.findById(id);
        if (userModelOptional.isPresent()){
            userModel = userModelOptional.get();
        }
        return getDto(userModel);
    }
    public UserModel getModel(UserDto userDto){
        UserModel userModel = new UserModel();
        userModel.setId(userDto.getId());
        userModel.setEmail(userDto.getEmail());
        userModel.setFirstName(userDto.getFirstName());
        userModel.setLastName(userDto.getLastName());
        userModel.setRole(Role.valueOf(userDto.getRole()));
        return userModel;
    }

    public UserDto getDto(UserModel userModel){
        UserDto userDto = new UserDto();
        userDto.setId(userModel.getId());
        userDto.setEmail(userModel.getEmail());
        userDto.setFirstName(userModel.getFirstName());
        userDto.setLastName(userModel.getLastName());
        if (userModel.getPhoto()!=null){
            userDto.setPhotoId(userModel.getPhoto().getId());
        }
        userDto.setRole(userModel.getRole().name());
        return userDto;
    }

    private boolean ifUserIsRegistred(String email){
        List<UserModel> userModels = userRepository.findAll();
        for (UserModel userModel: userModels){
            if (userModel.getEmail().equals(email)){
                return true;
            }
        }
        return false;
    }
    private void checkFirstUserAndSetRoleInitial(UserDto userDto){
        List<UserModel> userModels = userRepository.findAll();
        if (userModels.size() > 0){
            userDto.setRole("Standard");
        }else{
            userDto.setRole("Admin");
        }
    }
    public UserDto getByEmail(String email){
        Optional<UserModel> userModelOptional = userRepository.findByEmail(email);
        UserDto userDto = new UserDto();
        if (userModelOptional.isPresent()){
            UserModel userModel = userModelOptional.get();
            getDto(userModel);
        }
        return userDto;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserModel> personCredentialModelOptional = userRepository.findByEmail(email);
        if (!personCredentialModelOptional.isPresent()) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        UserModel userModel = personCredentialModelOptional.get();
        String userName = userModel.getEmail();
        String password = userModel.getPassword();
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();

        //ROLE_ADMIN is important to be picked up by hasRole from @PreAuthorize in DummyConteoller
        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority("ROLE_" +  userModel.getRole().name().toUpperCase());
        authorities.add(simpleGrantedAuthority);
        return new User(userName, password, authorities);
    }
}

