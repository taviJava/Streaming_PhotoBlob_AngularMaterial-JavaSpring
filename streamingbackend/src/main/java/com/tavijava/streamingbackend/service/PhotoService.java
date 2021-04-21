package com.tavijava.streamingbackend.service;

import com.tavijava.streamingbackend.message.ResponseMessage;
import com.tavijava.streamingbackend.persistance.dto.PhotoDto;
import com.tavijava.streamingbackend.persistance.model.Photo;
import com.tavijava.streamingbackend.persistance.model.UserModel;
import com.tavijava.streamingbackend.repository.PhotoRepository;
import com.tavijava.streamingbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PhotoService {
    @Autowired
    private PhotoRepository photoRepository;

    @Autowired
    private UserService userService;

    public void addPhoto( PhotoDto photo) {
      photoRepository.save(getModel(photo));
    }
    public List<PhotoDto> getPhotos(){
        List<Photo> photos = photoRepository.findAll();
        List<PhotoDto> photoDtos = new ArrayList<>();
        photos.forEach(photo -> {
            photoDtos.add(getPhotoDtoStd(photo));
        });
        return photoDtos;
    }
    public PhotoDto getPhoto(String id){
        PhotoDto photoDto = new PhotoDto();
        Optional<Photo> photoOptional = photoRepository.findById(id);
        if (photoOptional.isPresent()){
            photoDto = getPhotoDtoStd(photoOptional.get());
        }
        return photoDto;
    }
    public void delete(String id){
        photoRepository.deleteById(id);
    }
    public Photo getModelStd(PhotoDto photoDto){
        Photo photo = new Photo(photoDto.getName(),photoDto.getType(),photoDto.getData());
        return photo;
    }
    public PhotoDto getPhotoDtoStd(Photo photo){
        PhotoDto photoDto = new PhotoDto(photo.getId(),photo.getName(),photo.getType(),photo.getData());
        return photoDto;
    }
    private Photo getModel(PhotoDto photoDto){
        Photo photo = getModelStd(photoDto);
        photo.setUser(userService.getModel(photoDto.getUserDto()));
        return photo;
    }

}
