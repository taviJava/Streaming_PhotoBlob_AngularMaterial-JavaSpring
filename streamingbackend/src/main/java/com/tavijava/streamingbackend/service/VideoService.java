package com.tavijava.streamingbackend.service;

import com.tavijava.streamingbackend.persistance.dto.VideoDto;
import com.tavijava.streamingbackend.persistance.model.Video;
import com.tavijava.streamingbackend.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    VideoRepository videoRepository;

    public void addVideo(MultipartFile file) {
        Path filepath = Paths.get("C:\\Users\\Tavi\\Proiecte Intellij\\AMCrudUsers\\angMatCrudUserApp\\src\\assets\\VIDEO", file.getOriginalFilename());
        try (OutputStream os = Files.newOutputStream(filepath)) {
            addVideoWithoutContentToDb(file);
            os.write(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void addVideoWithoutContentToDb(MultipartFile file) {
        VideoDto videoDto = new VideoDto();
        videoDto.setFile_name(file.getOriginalFilename());
        videoDto.setFile_extension(file.getContentType());
        videoRepository.save(getModel(videoDto));
    }

    public Video getVideo(long id) {
        Optional<Video> videoOptional = videoRepository.findById(id);
        Video video = new Video();
        if (videoOptional.isPresent()) {
            video = videoOptional.get();
            return video;
        }

        return video;
    }

    private List<VideoDto> getAllVideo() {
        List<VideoDto> videoList = new ArrayList<>();
        videoRepository.findAll().forEach(video -> {
            videoList.add(getDto(video));
        });
        return videoList;
    }

    public List<String> getVideoURLs() {
        String basic = "assets/VIDEO/";
        List<VideoDto> videoDtos = getAllVideo();
        List<String> urlList = new ArrayList<>();
        videoDtos.forEach(video -> {
            String url = basic + video.getFile_name();
            urlList.add(url);
        });
        return urlList;
    }

    private Video getModel(VideoDto videoDto) {
        Video video = new Video();
        video.setId(videoDto.getId());
        video.setFile_extension(videoDto.getFile_extension());
        video.setFile_name(videoDto.getFile_name());
        return video;
    }

    private VideoDto getDto(Video video) {
        VideoDto videoDto = new VideoDto();
        videoDto.setId(video.getId());
        videoDto.setFile_extension(video.getFile_extension());
        videoDto.setFile_name(video.getFile_name());
        return videoDto;
    }
}
