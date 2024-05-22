package com.example.del.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

import org.springframework.stereotype.Service;

import com.example.del.entity.City;
import com.example.del.entity.Route;

@Service
public class RouteOptimizationService {

    /**
     * Метод для поиска оптимального маршрута между двумя городами с использованием жадного алгоритма.
     *
     * @param origin          начальный город
     * @param destination     конечный город
     * @param availableRoutes список доступных маршрутов
     * @return список маршрутов, составляющих оптимальный путь
     */
    public List<Route> findOptimalRoute(City origin, City destination, List<Route> availableRoutes) {
        // Инициализация списка для результата
        List<Route> optimalRoute = new ArrayList<>();

        // PriorityQueue для хранения маршрутов в порядке возрастания расстояния
        PriorityQueue<Route> pq = new PriorityQueue<>(Comparator.comparingDouble(Route::getDistance));

        // Добавляем маршруты, начинающиеся с начального города, в очередь с приоритетом
        for (Route route : availableRoutes) {
            if (route.getStartCity().equals(origin)) {
                pq.add(route);
            }
        }

        // Пока есть маршруты для обработки
        while (!pq.isEmpty()) {
            Route shortestRoute = pq.poll(); // Получаем самый короткий доступный маршрут

            // Если достигли конечного города, завершаем
            if (shortestRoute.getEndCity().equals(destination)) {
                optimalRoute.add(shortestRoute);
                break;
            }

            // В противном случае добавляем маршрут в список оптимального маршрута и добавляем новые маршруты в очередь с приоритетом
            optimalRoute.add(shortestRoute);
            City nextCity = shortestRoute.getEndCity();

            for (Route route : availableRoutes) {
                if (route.getStartCity().equals(nextCity)) {
                    pq.add(route);
                }
            }
        }

        return optimalRoute;
    }
}
