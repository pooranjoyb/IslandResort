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
public class UpdateBooking {

  @CrossOrigin(origins = "http://localhost:5173")
  @PostMapping("/api/booking/update")
  public void submitBooking(@RequestBody BookingData bookingData) {
    System.out.println("Received updated data: " + bookingData);

    updateUser(bookingData);
  }
  
  private void updateUser(BookingData bookingData) {
    String insertSql = "UPDATE bookings SET address = ?, city = ?, state = ?, zip = ?, accommodation = ?, checkin = ?, checkout = ? WHERE name = ?";

    try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/bookings", "root", "pass");
        PreparedStatement statement = connection.prepareStatement(insertSql)) {

      statement.setString(1, bookingData.getAddress());
      statement.setString(2, bookingData.getCity());
      statement.setString(3, bookingData.getState());
      statement.setString(4, bookingData.getZip());
      if (bookingData.getAccommodation() != null) {
        statement.setString(5, bookingData.getAccommodation());
      } else {
        statement.setNull(5, Types.VARCHAR);
      }
      statement.setString(6, bookingData.getcheckInDate());
      statement.setString(7, bookingData.getcheckOutDate());
      statement.setString(8, bookingData.getName());

      statement.executeUpdate();

      System.out.println("Data Updated in the database.");
    } catch (SQLException e) {
      System.err.println("Error updating data to the database: " + e.getMessage());
    }
  }
}