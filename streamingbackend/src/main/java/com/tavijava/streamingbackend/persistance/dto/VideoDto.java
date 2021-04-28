package com.tavijava.streamingbackend.persistance.dto;

public class VideoDto {
    private long id;
    private String filename;
    private String fileextension;
    private byte[] data;
    private UserDto user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFileextension() {
        return fileextension;
    }

    public void setFileextension(String fileextension) {
        this.fileextension = fileextension;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }
}
