package com.example;

public class User {
    private int id;
    private String username;
    private String password;
    private int status;

    public int getID() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public int getStatus() {
        return this.status;
    }

    public void setID(int id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}