package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.ClientFactory;
import com.lacouf.al420565final.model.Client;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("client")
@CrossOrigin("http://localhost:3000")
public class ClientController {

    @GetMapping
    public List<Client> getAll(){
        return ClientFactory.getClients();
    }

    @GetMapping("/getAllByGender")
    public List<Client> getAllByGender(@RequestParam String gender) {
        return ClientFactory.getClients()
                .stream()
                .filter(client -> client.getGender().equalsIgnoreCase(gender))
                .collect(Collectors.toList());
    }

    @GetMapping("/getAllByProvince")
    public List<Client> getAllByProvince(@RequestParam String province) {
        return ClientFactory.getClients()
                .stream()
                .filter(client -> client.getProvince().equalsIgnoreCase(province))
                .collect(Collectors.toList());
    }
}
