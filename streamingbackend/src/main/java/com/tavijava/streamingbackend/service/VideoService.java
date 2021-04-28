package com.tavijava.streamingbackend.service;

import com.tavijava.streamingbackend.persistance.dto.UserDto;
import com.tavijava.streamingbackend.persistance.dto.VideoDto;
import com.tavijava.streamingbackend.persistance.model.UserModel;
import com.tavijava.streamingbackend.persistance.model.Video;
import com.tavijava.streamingbackend.repository.UserRepository;
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
    private  VideoRepository videoRepository;
    @Autowired
    private UserRepository userRepository;

    public void addVideo(VideoDto videoDto) {
        try{
            Files.createDirectories(Paths.get("C:\\Users\\Tavi\\Proiecte Intellij\\Streaming_PhotoBlob_Security_AngularM_JavaS\\streamingFront\\src\\assets\\VIDEOS\\"+ videoDto.getUser().getEmail()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Path filepath = Paths.get("C:\\Users\\Tavi\\Proiecte Intellij\\Streaming_PhotoBlob_Security_AngularM_JavaS\\streamingFront\\src\\assets\\VIDEOS\\"+ videoDto.getUser().getEmail(), videoDto.getFilename());
        try (OutputStream os = Files.newOutputStream(filepath)) {
            addVideoWithoutContentToDb(videoDto);
            os.write(videoDto.getData());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void addVideoWithoutContentToDb(VideoDto videoDto) {
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
        String basic = "assets/VIDEOS/";
        List<VideoDto> videoDtos = getAllVideo();
        List<String> urlList = new ArrayList<>();
        videoDtos.forEach(video -> {
            String url = basic + video.getUser().getEmail() +"/" + video.getFilename();
            urlList.add(url);
        });
        return urlList;
    }

    private Video getModel(VideoDto videoDto) {
        Video video = new Video();
        video.setId(videoDto.getId());
        video.setFile_extension(videoDto.getFileextension());
        video.setFile_name(videoDto.getFilename());
        Optional<UserModel> userModelOptional = userRepository.findById(videoDto.getUser().getId());
        if (userModelOptional.isPresent()){
            video.setUserModel(userModelOptional.get());
        }
        return video;
    }

    private VideoDto getDto(Video video) {
        VideoDto videoDto = new VideoDto();
        videoDto.setId(video.getId());
        videoDto.setFileextension(video.getFile_extension());
        videoDto.setFilename(video.getFile_name());
        UserDto userDto = new UserDto();
        userDto.setEmail(video.getUserModel().getEmail());
        videoDto.setUser(userDto);
        return videoDto;
    }
}
