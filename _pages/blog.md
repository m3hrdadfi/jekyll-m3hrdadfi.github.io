---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

{% assign postlist = paginator.posts %}
<div class="container container-custom py-3">

{% if postlist.size > 0 %}

  {% for post in postlist %}
    <div class="research-card">
      <div class="row g-0">
        {% if post.thumbnail %}
          <div class="col-md-3 d-flex align-items-left justify-content-left">
            <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="research-image">
          </div>
        {% endif %}
        <div class="col-md-9 p-4">
          <h3 class="research-title">
            <a href="{{ post.url | relative_url }}" class="text-decoration-none text-dark">{{ post.title }}</a>
          </h3>
          {% if post.description %}
            <p class="research-subtitle">{{ post.description }}</p>
          {% endif %}

          <p class="research-authors">
            {{ post.date | date: "%B %d, %Y" }} &middot; {{ post.content | number_of_words | divided_by: 180 | plus: 1 }} min read
          </p>

          <div class="research-links">
            {% assign tags = post.tags | join: "" %}
            {% assign categories = post.categories | join: "" %}

            <a href="{{ post.date | date: '%Y' | prepend: '/blog/' | relative_url }}">
              <i class="fa-solid fa-calendar fa-sm"></i> {{ post.date | date: "%Y" }}</a>

            {% if tags != "" %}
              &nbsp; &middot; &nbsp;
              {% for tag in post.tags %}
                <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                  <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
                {% unless forloop.last %}
                  &nbsp;
                {% endunless %}
              {% endfor %}
            {% endif %}

            {% if categories != "" %}
              &nbsp; &middot; &nbsp;
              {% for category in post.categories %}
                <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                  <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
                {% unless forloop.last %}
                  &nbsp;
                {% endunless %}
              {% endfor %}
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}

{% else %}

  <div class="text-center py-5">
    <h3 class="text-muted">No posts yet</h3>
    <p class="text-muted">Check back soon for new insights and updates.</p>
  </div>

{% endif %}

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}

</div>
