package com.tavijava.streamingbackend.controller;

import com.tavijava.streamingbackend.persistance.dto.UserDto;
import com.tavijava.streamingbackend.security.AuthTokenData;
import com.tavijava.streamingbackend.security.TokenProvider;
import com.tavijava.streamingbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenProvider jwtTokenUtil;
    @PostMapping("/login")
    public ResponseEntity generateToken(@RequestBody UserDto userDto) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userDto.getEmail(),
                        userDto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication);
        System.out.println(token);
        return ResponseEntity.ok(new AuthTokenData(token));
    }
    @PostMapping("/users")
    public void add(@RequestBody UserDto userDto){
        userService.add(userDto);
    }
    @PutMapping("/users")
    public void update(@RequestBody UserDto userDto){
        userService.update(userDto);
    }
    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable(name = "id") long id){
        userService.delete(id);
    }
    @GetMapping("/users")
    public List<UserDto> getAll(){
        return    userService.getAll();
    }
    @GetMapping("/users/{id}")
    public UserDto getOne(@PathVariable(name = "id") long id){
        return userService.getOne(id);
    }
    @GetMapping("/user/{email}")
    public UserDto getByEmail(@PathVariable(name = "email") String email){
        return userService.getByEmail(email);
    }
}

