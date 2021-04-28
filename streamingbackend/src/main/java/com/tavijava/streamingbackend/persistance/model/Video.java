package com.tavijava.streamingbackend.persistance.model;

import javax.persistence.*;

@Entity
@Table(name = "video")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    private   String file_name;
    private   String file_extension;
    @ManyToOne(fetch = FetchType.EAGER)
    private   UserModel user;
    public String getFile_extension() {
        return file_extension;
    }

    public void setFile_extension(String file_extension) {
        this.file_extension = file_extension;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFile_name() {
        return file_name;
    }

    public void setFile_name(String file_name) {
        this.file_name = file_name;
    }

    public UserModel getUserModel() {
        return user;
    }

    public void setUserModel(UserModel userModel) {
        this.user = userModel;
    }
}
