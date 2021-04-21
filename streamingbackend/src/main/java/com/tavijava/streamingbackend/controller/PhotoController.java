package com.tavijava.streamingbackend.controller;

import com.tavijava.streamingbackend.persistance.dto.PhotoDto;
import com.tavijava.streamingbackend.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class PhotoController {
    @Autowired
    private PhotoService photoService;


    @GetMapping("/photos/{strID}")
    public PhotoDto getPhotoo(@PathVariable(name = "strID") String strID){
       return photoService.getPhoto(strID);
    }
    @GetMapping("/photos")
    public List<PhotoDto> getPhotos(){
       return photoService.getPhotos();
    }
    @PostMapping("/photos")
    public void save(@RequestBody PhotoDto photoDto){
        photoService.addPhoto(photoDto);
    }
    @DeleteMapping("/photos/{strID}")
    public void delete(@PathVariable(name = "strID") String strID){
        photoService.delete(strID);
    }
}

