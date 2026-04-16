package com.busbooking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bus_route")
public class BusRoute {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "route_id")
	private Integer routeId;
	
	@Column(name = "source")
	private String src;
	
	@Column(name = "destination")
	private String dest;

	public Integer getRouteId() {
		return routeId;
	}

	public void setRouteId(Integer routeId) {
		this.routeId = routeId;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public String getDest() {
		return dest;
	}

	public void setDest(String dest) {
		this.dest = dest;
	}

	@Override
	public String toString() {
		return "Bus_route [routeId=" + routeId + ", src=" + src + ", dest=" + dest + "]";
	}
	
	
	
	
	
	
	
}
