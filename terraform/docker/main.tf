/*
 * Following these tutorials:
 *
 * - https://developer.hashicorp.com/terraform/tutorials/docker-get-started/install-cli
 * - https://developer.hashicorp.com/terraform/tutorials/docker-get-started/docker-variables
 * - https://developer.hashicorp.com/terraform/tutorials/docker-get-started/docker-outputs
 *
 * The tutorial creates some warnings. Here is the fix:
 *
 * https://github.com/kreuzwerker/terraform-provider-docker/issues/452
 */

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.23.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = var.container_name
  ports {
    internal = 80
    external = 8080
  }
}
