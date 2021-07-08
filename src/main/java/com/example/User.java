package com.example;
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
    }
}