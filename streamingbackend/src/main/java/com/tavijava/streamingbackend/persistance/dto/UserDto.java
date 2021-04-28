package com.tavijava.streamingbackend.persistance.dto;

import org.w3c.dom.stylesheets.LinkStyle;

import java.util.ArrayList;
import java.util.List;

public class UserDto {
    private long id;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String role;
    private PhotoDto photo;
    private List<VideoDto> video = new ArrayList<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public PhotoDto getPhotoDto() {
        return photo;
    }

    public void setPhotoDto(PhotoDto photoDto) {
        this.photo = photoDto;
    }

    public PhotoDto getPhoto() {
        return photo;
    }

    public void setPhoto(PhotoDto photo) {
        this.photo = photo;
    }

    public List<VideoDto> getVideo() {
        return video;
    }

    public void setVideo(List<VideoDto> video) {
        this.video = video;
    }
}
