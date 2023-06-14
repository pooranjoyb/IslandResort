package com.islandresort.backend.controllers;

import com.islandresort.backend.models.BookingData;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

@RestController
public class BookingController {

  @CrossOrigin(origins = "http://localhost:5173")
  @PostMapping("/api/booking")
  public void submitBooking(@RequestBody BookingData bookingData) {
    System.out.println("Received booking data: " + bookingData);

    saveBookingToDatabase(bookingData);
  }

  private void saveBookingToDatabase(BookingData bookingData) {
    String insertSql = "INSERT INTO bookings (name, address, city, state, zip, accommodation, checkin, checkout) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/bookings", "root", "pass");
        PreparedStatement statement = connection.prepareStatement(insertSql)) {

      statement.setString(1, bookingData.getName());
      statement.setString(2, bookingData.getAddress());
      statement.setString(3, bookingData.getCity());
      statement.setString(4, bookingData.getState());
      statement.setString(5, bookingData.getZip());
      if (bookingData.getAccommodation() != null) {
        statement.setString(6, bookingData.getAccommodation());
      } else {
        statement.setNull(6, Types.VARCHAR);
      }
      statement.setString(7, bookingData.getcheckInDate());
      statement.setString(8, bookingData.getcheckOutDate());

      statement.executeUpdate();

      System.out.println("Booking data saved to the database.");
    } catch (SQLException e) {
      System.err.println("Error saving booking data to the database: " + e.getMessage());
    }
  }
}