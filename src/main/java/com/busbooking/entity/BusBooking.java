package com.busbooking.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="bus_booking")
public class BusBooking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="b_id")
	private Integer bid;
	
	@Column(name="booking_dt")
	private LocalDate bookingDt;
	
	@Column(name="booking_status")
	private String bookingStatus;
	
	@ManyToOne()
	@JoinColumn(name="cust_id")
	private Customer customer;
	
	
	

}
