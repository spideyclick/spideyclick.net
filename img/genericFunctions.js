function findIdsInClass(className) {
  idsInClass = document.getElementsByClassName(className);
  var output = [];
  for (i = 0; i < idsInClass.length; i++) {
    output.push(idsInClass[i]['id'])
  }
  return output
};
function findClass (elementId, className) {
  classFound = false;
  elementClasses = document.getElementById(elementId).getAttribute('class').split(' ');
  for (var i = 0; i < elementClasses.length; i++) {
    if (elementClasses[i] == className) {
      classFound = true;
    }
  }
  return classFound;
};
function findObjectClass (object, className) {
  classFound = false;
  objectClasses = object.getAttribute('class').split(' ');
  for (var i = 0; i < objectClasses.length; i++) {
    if (objectClasses[i] == className) {
      classFound = true;
    }
  }
  return classFound;
};
function addClass(elementId, className) {
  classFound = findClass(elementId, className);
  if (!classFound) {
    document.getElementById(elementId).setAttribute("class", (document.getElementById(elementId).getAttribute('class') + " " + className))
  }
};
function addObjectClass(object, className) {
  classFound = findObjectClass(object, className);
  if (!classFound) {
    object.setAttribute("class", (object.getAttribute('class') + " " + className))
  }
};
function removeClass(elementId, className) {
  elementClasses = document.getElementById(elementId).getAttribute('class').split(' ');
  var newClasses = "";
  var firstClassAdded = false;
  for (var i = 0; i < elementClasses.length; i++) {
    if (elementClasses[i] != className) {
      if (firstClassAdded == true) {
        newClasses = newClasses + " " + elementClasses[i];
      } else {
        newClasses = elementClasses[i];
        firstClassAdded = true;
      }
    }
  }
  document.getElementById(elementId).setAttribute('class', newClasses);
};
function removeObjectClass(object, className) {
  objectClasses = object.getAttribute('class').split(' ');
  newClasses = "";
  var firstClassAdded = false;
  for (var i = 0; i < elementClasses.length; i++) {
    if (elementClasses[i] != className) {
      if (firstClassAdded == true) {
        newClasses = newClasses + " " + elementClasses[i];
      } else {
        newClasses = elementClasses[i];
        firstClassAdded = true;
      }
    }
  }
  object.setAttribute("class", newClasses)
};
function toggleClass(elementId, className) {
  classFound = findClass(elementId, className);
  if (classFound) {
    removeClass(elementId, className);
  } else {
    document.getElementById(elementId).setAttribute("class", (document.getElementById(elementId).getAttribute('class') + " " + className))
  }
};
function toggleObjectClass(object, className) {
  classFound = findObjectClass(object, className);
  if (classFound) {
    removeObjectClass(object, className);
  } else {
    object.setAttribute("class", (object.getAttribute('class') + " " + className))
  }
};
function ajaxCall(a, b, c, d){ // method, URL, data, callback
  var c = new XMLHttpRequest;
  c.open(a, b);
  c.onload = d;
  c.send()
};
function callback(){
  if (this.response !== undefined) {
    document.getElementById(findIdsInClass('outputDiv')[0]).innerHTML=this.response;
    removeClass(findIdsInClass('outputDiv')[0], 'outputDiv')
  }
};
function ajax(outputDiv, url, method, data) {
  addClass(outputDiv, 'outputDiv')
  ajaxCall('GET', url, undefined, callback);
};
function randomNumber(min, max, enableNegative) {
    thisNumber = Math.floor(Math.random() * max) + min;
    if (enableNegative == true) {
      if (Math.floor(Math.random() * 2) + 1 == 2) {
        thisNumber = thisNumber * -1
      }
    }
    return thisNumber
  };
function degToRad(degrees) {
      return degrees * Math.PI / 180;
}
  function hexToDec(myStr) {
    output = []
    output.push((parseInt(myStr.substring(0, 2), 16)/255).toFixed(3));
    output.push((parseInt(myStr.substring(2, 4), 16)/255).toFixed(3));
    output.push((parseInt(myStr.substring(4, 6), 16)/255).toFixed(3));
    // console.log(output)
    return output;
  }
