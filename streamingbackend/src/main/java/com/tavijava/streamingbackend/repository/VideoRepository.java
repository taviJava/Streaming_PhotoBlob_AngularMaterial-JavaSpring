package com.tavijava.streamingbackend.repository;

import com.tavijava.streamingbackend.persistance.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
}
