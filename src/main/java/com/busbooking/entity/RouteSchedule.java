package com.busbooking.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="route_schedule")
public class RouteSchedule {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="rs_id")
	private Integer rsId;
	
	@Column(name="departure_time")
	private LocalDateTime departureTime;
	
	@Column(name="schedule_dt")
	private LocalDate scheduleDt;
	
	@Column(name="avl_seats")
	private Integer avlSeats;
	
	@Column(name="tot_seats")
	private Integer totSeats;
	
	@Column(name="sch_staus")
	private String schStatus;
	
	
	@ManyToOne
	@JoinColumn(name="route_id")
	private BusRoute busRoute;
	
	public RouteSchedule() {
		super();
	}
	
	


	public Integer getRsId() {
		return rsId;
	}


	public void setRsId(Integer rsId) {
		this.rsId = rsId;
	}


	public LocalDateTime getDepartureTime() {
		return departureTime;
	}


	public void setDepartureTime(LocalDateTime departureTime) {
		this.departureTime = departureTime;
	}


	public LocalDate getScheduleDt() {
		return scheduleDt;
	}


	public void setScheduleDt(LocalDate scheduleDt) {
		this.scheduleDt = scheduleDt;
	}


	public Integer getAvlSeats() {
		return avlSeats;
	}


	public void setAvlSeats(Integer avlSeats) {
		this.avlSeats = avlSeats;
	}


	public Integer getTotSeats() {
		return totSeats;
	}


	public void setTotSeats(Integer totSeats) {
		this.totSeats = totSeats;
	}


	public String getSchStatus() {
		return schStatus;
	}


	public void setSchStatus(String schStatus) {
		this.schStatus = schStatus;
	}


	public BusRoute getBusRoute() {
		return busRoute;
	}


	public void setBusRoute(BusRoute busRoute) {
		this.busRoute = busRoute;
	}
	
	
	


	


	@Override
	public String toString() {
		return "RouteSchedule [rsId=" + rsId + ", departureTime=" + departureTime + ", scheduleDt=" + scheduleDt
				+ ", avlSeats=" + avlSeats + ", totSeats=" + totSeats + ", schStatus=" + schStatus + ", busRoute="
				+ busRoute + "]";
	}
	
	
	

}
