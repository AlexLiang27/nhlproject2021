package com.example;
<<<<<<< HEAD

public class User {
    private int id;
    private String username;
    private String password;

    public int getID() {
        return this.id;
    }

    public String getUserName() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setID(int id) {
        this.id = id;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
=======
public class User {
    private String user;
    private String pass;

    public String getUserName(){
        return this.user;
    }
    public String getPassword(){
        return this.pass;
    }
    public void setUserName(String u){
        this.user=u;
    }
    public void setPassword(String p){
        this.pass=p;
>>>>>>> 62f43f51fc0cb720f65b1c3b8eb93206bd13c8b4
    }
}