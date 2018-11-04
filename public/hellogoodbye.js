(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

fetch("http://localhost:8088/customer").then(data => data.json()).then(contacts => {
  let emailArray = [];
  contacts.forEach(person => {
    person.contacts.email.forEach(email => {
      emailArray.push(email);
    });
  });
  console.log(emailArray);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0csSUFESCxDQUNRLElBQUksSUFBSSxJQUFJLENBQUMsSUFBTCxFQURoQixFQUVHLElBRkgsQ0FFUSxRQUFRLElBQUk7QUFDaEIsTUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxFQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sSUFBSTtBQUN6QixJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQWhCLENBQXNCLE9BQXRCLENBQThCLEtBQUssSUFBSTtBQUNyQyxNQUFBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLEtBQWhCO0FBQ0QsS0FGRDtBQUdELEdBSkQ7QUFLQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNELENBVkgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jdXN0b21lclwiKVxyXG4gIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgLnRoZW4oY29udGFjdHMgPT4ge1xyXG4gICAgbGV0IGVtYWlsQXJyYXkgPSBbXTtcclxuICAgIGNvbnRhY3RzLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgcGVyc29uLmNvbnRhY3RzLmVtYWlsLmZvckVhY2goZW1haWwgPT4ge1xyXG4gICAgICAgIGVtYWlsQXJyYXkucHVzaChlbWFpbCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZW1haWxBcnJheSlcclxuICB9KSJdfQ==
