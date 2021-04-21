package com.tavijava.streamingbackend.persistance.dto;


public class PhotoDto {
    private String id;

    private String name;

    private String type;

    private byte[] data;

    private UserDto userDto;

    public PhotoDto(String id, String name, String type, byte[] data) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public PhotoDto(String name, String type, byte[] data) {
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

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public UserDto getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }
}
