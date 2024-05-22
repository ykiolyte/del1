package com.example.del.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.del.entity.City;
import com.example.del.entity.Route;
import com.example.del.service.RouteOptimizationService;

@RestController
@RequestMapping("/routes")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class RouteController {

    @Autowired
    private RouteOptimizationService routeOptimizationService;

    @PostMapping("/optimize")
    public List<Route> findOptimalRoute(@RequestParam City origin, @RequestParam City destination, @RequestBody List<Route> availableRoutes) {
        return routeOptimizationService.findOptimalRoute(origin, destination, availableRoutes);
    }
}
