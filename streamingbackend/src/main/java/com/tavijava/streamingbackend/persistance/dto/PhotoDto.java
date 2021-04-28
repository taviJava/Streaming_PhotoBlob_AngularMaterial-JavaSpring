package com.tavijava.streamingbackend.persistance.dto;


public class PhotoDto {
    private String id;

    private UserDto user;

    private String name;

    private String type;

    private String data;



    public PhotoDto(String id, String name, String type, String data) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public PhotoDto(String name, String type, String data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public PhotoDto() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }


    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

}
