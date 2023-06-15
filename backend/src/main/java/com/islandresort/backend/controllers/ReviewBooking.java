package com.islandresort.backend.controllers;

import com.islandresort.backend.models.BookingData;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@RestController
public class ReviewBooking {

  @CrossOrigin(origins = "http://localhost:5173")
  @PostMapping("/api/review")
  public BookingData submitBooking(@RequestBody BookingData bookingData) {
    System.out.println("Received booking data: " + bookingData);

    BookingData userData = fetchUserDataFromDatabase(bookingData);
    return userData;
  }

  private BookingData fetchUserDataFromDatabase(BookingData bookingData) {
    String selectSql = "SELECT * FROM bookings WHERE name = ? AND checkin = ? AND checkout = ?";
    BookingData userData = new BookingData();

    try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/bookings", "root", "pass");
        PreparedStatement statement = connection.prepareStatement(selectSql)) {

      statement.setString(1, bookingData.getName());
      statement.setString(2, bookingData.getcheckInDate());
      statement.setString(3, bookingData.getcheckOutDate());

      try (ResultSet resultSet = statement.executeQuery()) {
        if (resultSet.next()) {
          userData.setName(resultSet.getString("name"));
          userData.setAddress(resultSet.getString("address"));
          userData.setCity(resultSet.getString("city"));
          userData.setState(resultSet.getString("state"));
          userData.setZip(resultSet.getString("zip"));
          userData.setAccommodation(resultSet.getString("accommodation"));
          userData.setcheckInDate(resultSet.getString("checkin"));
          userData.setcheckOutDate(resultSet.getString("checkout"));
        }
      }

      System.out.println("User data fetched from the database.");
    } catch (SQLException e) {
      System.err.println("Error fetching user data from the database: " + e.getMessage());
    }

    return userData;
  }
}