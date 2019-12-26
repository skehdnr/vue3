
package com.wego.web.article;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Data;

@Entity
@Data
@Table(name = "Article")
@Component
public class Article {
	@Id
	@GeneratedValue
	@Column(name = "ID", nullable = false)
	private Long artseq;
	@Column(name = "IMAGE", nullable = false)
	private String image;
	@Column(name = "UID", length = 64, nullable = false)
	private String uid;
	@Column(name = "COMMANTS", nullable = false)
	private String commants;
	@Column(name = "MSG", length = 64, nullable = false)
	private String msg;
	@Column(name = "RATING", length = 64, nullable = false)
	private String rating;
	@Column(name = "BOARDTYPE", nullable = false)
	private String boardType;
	@Column(name = "TITLE", length = 64, nullable = false)
	private String title;
	@Column(name = "CONTENT", length = 64, nullable = false)
	private String content;

}
