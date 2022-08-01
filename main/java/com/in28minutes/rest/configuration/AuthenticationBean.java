package com.in28minutes.rest.configuration;

public class AuthenticationBean {

	private String msg;

	public AuthenticationBean(String msg) {
		
		this.msg=msg;
		// TODO Auto-generated constructor stub
	}
	
	
	public String getMsg() {
		return msg;
	}


	public void setMsg(String msg) {
		this.msg = msg;
	}


	@Override
	public String toString() {
		return "HelloWorldBean [msg=" + msg + "]";
	}

}
