/*
 * Copyright 2002-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example;
//PLEASE WORK
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Map;
// mr poopy butthole
@Controller
@SpringBootApplication
public class Main {

  @Value("${spring.datasource.url}")
  private String dbUrl;

  @Autowired
  private DataSource dataSource;

  public static void main(String[] args) throws Exception {
    SpringApplication.run(Main.class, args);
  }

  @RequestMapping("/")
  String index() {
    return "login";
  }

  @GetMapping("/register")
  String goRegister(Map<String, Object> model){
    User user = new User();
    model.put("user", user);
    return "register";
  }

  @GetMapping(path="/login")
  String goLogin() {
    return "login";
  }

  @GetMapping(path="/home")
  String goHome() {
    return "home";
  }

  @PostMapping("/registeruser")
  public String userRegister(Map<String, Object> model, User user) {
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      stmt.executeUpdate("CREATE TABLE IF NOT EXISTS users (id serial, username varchar(30), password varchar(30))");
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");
      while (rs.next()) {
        if (user.getUsername() == rs.getString("username")) {
          // redirect back to register page with error message (username is already taken, please choose another username)
        }
      }
      String sql = "INSERT INTO users (username, password) VALUES ('" + user.getUsername() + "','" + user.getPassword() + "')";
      stmt.executeUpdate(sql);
      return "redirect:/login";
    } catch (Exception e) {
      model.put("message", e.getMessage());
      return "error";
    }
  }

  @PostMapping("/loginuser")
  String userLogin(Map<String, Object> model, User user) {
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");
      while (rs.next()) {
        if (user.getUsername() == rs.getString("username") && user.getPassword() == rs.getString("password")) { // check if works later
          return "redirect:/home";
        }
        else {
          // redirect back to login page with error message (username or password is incorrect)
        }
      }
      return "redirect:/home";
    } catch (Exception e) {
      model.put("message", e.getMessage());
      return "error";
    }
  }

  @GetMapping("/home")
  String toHome(Map<String, Object> model) {
    return "home";
  }


  @GetMapping("/teams")
  String toTeam(Map<String, Object> model) {
    return "teams";

  }







    @Bean
  public DataSource dataSource() throws SQLException {
    if (dbUrl == null || dbUrl.isEmpty()) {
      return new HikariDataSource();
    } else {
      HikariConfig config = new HikariConfig();
      config.setJdbcUrl(dbUrl);
      return new HikariDataSource(config);
    }
  }


  
  
}