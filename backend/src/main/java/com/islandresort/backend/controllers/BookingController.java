package com.islandresort.backend.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingController {

  @CrossOrigin(origins="http://localhost:5173")
  @PostMapping("/api/booking")
  public void submitBooking(@RequestBody String bookingData) {

    System.out.println("Received booking data: " + bookingData);

  }
}
