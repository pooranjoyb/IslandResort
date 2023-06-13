package com.islandresort.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class BackendApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Controller
	public static class HomeController {

		@GetMapping(value = {"/", "/{path:[^\\.]*}"})
		public String index() {
			return "forward:/index.html";
		}
	}


}
