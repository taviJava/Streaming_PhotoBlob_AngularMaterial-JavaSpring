package com.tavijava.streamingbackend.persistance.dto;

public class VideoDto {
    private  long id;
    private   String filename;
    private   String fileextension;
    private  UserDto userDto;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFile_name() {
        return filename;
    }

    public void setFile_name(String file_name) {
        this.filename = file_name;
    }

    public String getFile_extension() {
        return fileextension;
    }

    public void setFile_extension(String file_extension) {
        this.fileextension = file_extension;
    }

    public UserDto getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }
}
