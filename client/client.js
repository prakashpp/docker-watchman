"use strict";

var Docker = require('dockerode');

var docker = new Docker();

var containers = docker.listContainers(function (err, containers) {
  containers.forEach(function (containerInfo) {
    docker.getContainer(containerInfo.Id).inspect(function (err, data) {
      console.log(data);
    });
  });
});
