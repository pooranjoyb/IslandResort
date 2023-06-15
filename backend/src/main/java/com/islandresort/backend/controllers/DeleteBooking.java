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

@RestController
public class DeleteBooking {

  @CrossOrigin(origins = "http://localhost:5173")
  @PostMapping("/api/booking/cancel")
  public void submitBooking(@RequestBody BookingData bookingData) {
    System.out.println("Received cancellation data: " + bookingData);

    deleteFromDatabase(bookingData);
  }

  private void deleteFromDatabase(BookingData bookingData) {
    String insertSql = "DELETE FROM bookings WHERE name = ? AND checkin = ? AND checkout = ?";

    try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/bookings", "root", "pass");
        PreparedStatement statement = connection.prepareStatement(insertSql)) {

      statement.setString(1, bookingData.getName());
      statement.setString(2, bookingData.getcheckInDate());
      statement.setString(3, bookingData.getcheckOutDate());

      statement.executeUpdate();

      System.out.println("Data Deleted from Database Successfully");
    } catch (SQLException e) {
      System.err.println("Error deleting data from the database: " + e.getMessage());
    }
  }
}