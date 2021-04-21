package com.tavijava.streamingbackend.repository;

import com.tavijava.streamingbackend.persistance.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, String> {
}
