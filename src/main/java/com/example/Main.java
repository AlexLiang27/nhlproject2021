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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
//true == logged in else kicked back
  @RequestMapping("/")
  String infoPage(Map<String, Object> model, HttpSession session){
    boolean temp = securityHome(session);
    if(temp==true){
      return "redirect:/home";
    }
    return "info";
  }

  // @GetMapping("/login")
  // String index(Map<String, Object> model, HttpServletRequest request) {
  //   boolean temp = security(request);
  //   System.out.println("temp: "+temp);
  //   if (temp == true)
  //     return "redirect:/home";


  //   User user = new User();
  //   model.put("user",user);
  //   return "redirect:/login";
  // }

  @GetMapping("/register")
  String goRegister(Map<String, Object> model, HttpServletRequest request){
    boolean temp = security(request);
    if (temp == true)
      return "redirect:/home";

    User user = new User();
    model.put("user", user);
    return "register";
  }

  @RequestMapping("/login")
  String goLogin(Map<String, Object> model, HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == true)
      return "redirect:/home";

    User user = new User();
    model.put("user", user);
    return "login";
  }

  @GetMapping("/adminhome")
  String goAdminhome(HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";

    return "adminhome";
  }

  @GetMapping("/home")
  String goHome(HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";

    return "home";
  }

  @GetMapping("/teaminfo")
  String goTeaminfo(@RequestParam String id,HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";
 
    return "teaminfo";
  }

  


  @GetMapping("/seasonstats")
  String goSeasonStats(HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";

    return "seasonstats";
  }


  @GetMapping("/teamroster")
  String goTeamroster(HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";

    return "teamroster";
  }

  @GetMapping("/registererror")
  String goRegistererror() {
    return "registererror";
  }

  @GetMapping("/teams")
  String goTeams(Map<String, Object> model, HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";

    return "teams";
  }


  @PostMapping("/registeruser")
  public String userRegister(Map<String, Object> model, User user) {
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      stmt.executeUpdate("CREATE TABLE IF NOT EXISTS users (id serial, username varchar(30), password varchar(30), status int)");
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");
      while (rs.next()) {
        if (user.getUsername().equals(rs.getString("username"))) {
          // redirect back to register page with error message (username is already taken, please choose another username)
          System.out.println("Duplicate name inputted!");
          return "redirect:/registererror";
        }
      }
      String sql = "INSERT INTO users (username, password, status) VALUES ('" + user.getUsername() + "','" + user.getPassword() + "','" + 0 + "')";
      stmt.executeUpdate(sql);
      return "login";
    } catch (Exception e) {
      model.put("message", e.getMessage());
      return "error";
    }
  }

  @PostMapping("/loginuser")
  String userLogin(Map<String, Object> model, User user, HttpServletRequest request) {
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");
      while (rs.next()) {
        if (user.getUsername().equals(rs.getString("username")) && user.getPassword().equals(rs.getString("password")) && rs.getInt("status") == 0) {
          ArrayList<Integer> sessionID = (ArrayList<Integer>) request.getSession().getAttribute("MY_SESSION_ID");
          if (sessionID == null) {
            sessionID = new ArrayList();
            request.getSession().setAttribute("MY_SESSION_ID", sessionID);
          }
          if (sessionID.isEmpty()) {
            sessionID.add(rs.getInt("id"));
            request.getSession().setAttribute("MY_SESSION_ID", sessionID);
          }
          return "redirect:/home";
        }
        if (user.getUsername().equals(rs.getString("username")) && user.getPassword().equals(rs.getString("password")) && rs.getInt("status") == 1) { 
          System.out.println("adminpage");
          return "redirect:/adminhome";
        }
      }
      // redirect back to login page with error message (username or password is incorrect)
      System.out.println("Account username and/or password does not exist!");
      return "login";
    } catch (Exception e) {
      model.put("message", e.getMessage());
      return "error";
    }
  }

  @GetMapping("/comparison")
  String goComparison(Map<String, Object> model, HttpServletRequest request) {
    boolean temp = security(request);
    if (temp == false)
      return "redirect:/login";

    return "comparison";
  }


  //   @Bean
  // public DataSource dataSource() throws SQLException {
  //   if (dbUrl == null || dbUrl.isEmpty()) {
  //     return new HikariDataSource();
  //   } else {
  //     HikariConfig config = new HikariConfig();
  //     config.setJdbcUrl(dbUrl);
  //     return new HikariDataSource(config);
  //   }
  // }

  boolean security(HttpServletRequest request) {
    ArrayList<Integer> sessionID = (ArrayList<Integer>) request.getSession().getAttribute("MY_SESSION_ID");
    if (sessionID == null) {
      System.out.println("returning false!");
      return false;
    }
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");
      int temp = sessionID.get(0);
      while (rs.next()) {
        if (temp == rs.getInt("ID")) {
          System.out.println("returning true!");
          return true;
        } 
      }
      System.out.println("returning false2!");
      return false;
    } catch (Exception e) {
      return false;
    }
  }

  @GetMapping("/destroy")
	public String destroySession(HttpServletRequest request) {
		request.getSession().invalidate();
		return "redirect:/login";
	}

  boolean securityHome(HttpSession request) {
    ArrayList<Integer> sessionID = (ArrayList<Integer>) request.getAttribute("MY_SESSION_ID");
    if (sessionID == null) {
      System.out.println("returning false!");
      return false;
    }
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");
      int temp = sessionID.get(0);
      while (rs.next()) {
        if (temp == rs.getInt("ID")) {
          System.out.println("returning true!");
          return true;
        } 
      }
      System.out.println("returning false2!");
      return false;
    } catch (Exception e) {
      return false;
    }
  }
  
  
}