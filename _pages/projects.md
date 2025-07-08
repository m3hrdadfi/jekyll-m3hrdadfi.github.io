---
layout: page
title: Projects
permalink: /projects/
description: 
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="container container-custom py-3">

{% if sorted_projects.size > 0 %}

  {% for project in sorted_projects %}
    <div class="research-card">
      <div class="row g-0">
        {% if project.img %}
          <div class="col-md-3 d-flex align-items-center justify-content-center p-3">
            <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" class="research-image">
          </div>
        {% endif %}
        <div class="col-md-9 p-4">
          <h3 class="research-title">
            {% if project.url and project.url != "" and project.url != "/" %}
              <a href="{{ project.url | relative_url }}" class="text-decoration-none text-dark">{{ project.title }}</a>
            {% else %}
              {{ project.title }} <span class="badge bg-secondary align-middle">Coming soon</span>
            {% endif %}
          </h3>

          {% if project.description %}
            <p class="research-subtitle">{{ project.description }}</p>
          {% endif %}

          {% if project.authors %}
            <p class="research-authors">{{ project.authors }}</p>
          {% endif %}

          {% if project.venue %}
            <p class="research-venue">{{ project.venue }}</p>
          {% endif %}

          <div class="research-links">
            {% if project.links.page %}
              <a href="{{ project.links.page }}" target="_blank"><i class="fas fa-file-alt"></i>Page</a>
            {% endif %}
            {% if project.links.arxiv %}
              <a href="{{ project.links.arxiv }}" target="_blank"><i class="fab fa-github"></i>arXiv</a>
            {% endif %}
            {% if project.links.code %}
              <a href="{{ project.links.code }}" target="_blank"><i class="fab fa-github"></i>Code</a>
            {% endif %}
            {% if project.links.video %}
              <a href="{{ project.links.video }}" target="_blank"><i class="fas fa-video"></i>Video</a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}

{% else %}

  <div class="text-center py-5">
    <h3 class="text-muted">No projects yet</h3>
    <p class="text-muted">I'm currently working on exciting new ideas. Please check back soon!</p>
  </div>

{% endif %}

</div>
