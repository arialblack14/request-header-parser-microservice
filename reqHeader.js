var express = require('express'),
    bodyParser = require('body-parser');


exports.browser_type = function(ans) {
  var browser_type = "";
  // Check most common browsers from 'user-agent'
  if (ans["user-agent"].match(/chrome/i)) {
    browser_type = 'Chrome';
  } else if (ans["user-agent"].match(/explorer/i)) {
    browser_type = 'Internet Explorer';
  } else if (ans["user-agent"].match(/safari/i) || ans["user-agent"].match(/iPhone/i)) {
    browser_type = 'Safari';
  } else if (ans["user-agent"].match(/firefox/i)) {
    browser_type = 'Firefox';
  } else if (ans["user-agent"].match(/opera/i)) {
    browser_type = 'Opera';
  } else {
    browser_type = 'Unknown';
  }
  return browser_type;
};

exports.language = function(ans) {
  return ans["accept-language"].split(";")[0]; // Get first language accepted
};

exports.os = function(ans) {
  var os = "";
  // Check most common browsers from 'user-agent'
  if (ans["user-agent"].match(/android/i)) {
    os = 'Android';
  } else if (ans["user-agent"].match(/linux/i)) {
    os = 'Linux';
  } else if (ans["user-agent"].match(/windows/i)) {
    os = 'Windows';
  } else if (ans["user-agent"].match(/apple/i) || ans["user-agent"].match(/iPhone/i)) {
    os = 'Apple';
  } else {
    os = 'Unknown';
  }
  return os;
};
