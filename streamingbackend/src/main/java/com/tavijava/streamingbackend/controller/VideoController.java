package com.tavijava.streamingbackend.controller;

import com.tavijava.streamingbackend.persistance.dto.VideoDto;
import com.tavijava.streamingbackend.persistance.model.Video;
import com.tavijava.streamingbackend.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@CrossOrigin
@RestController
public class VideoController {

    @Autowired
    private VideoService service;


    @PostMapping("/video")
    public void addVideo(@RequestBody VideoDto videoDto) {
        service.addVideo(videoDto);
    }


    @GetMapping("/video/{id}")
    public Video getVideoByID(@PathVariable int id) {
        Video video = service.getVideo(id);
        return video;
    }

    @GetMapping("/video")
    public List<String> getVideoList(){
        return service.getVideoURLs();
    }

}

