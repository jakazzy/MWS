(function() {
    'use strict';
  
    /** Define values for keycodes */
    var VK_ENTER      = 13;
    var VK_SPACE      = 32;
    var VK_LEFT       = 37;
    var VK_UP         = 38;
    var VK_RIGHT      = 39;
    var VK_DOWN       = 40;
  
    /** Helper function to convert NodeLists to Arrays */
    function slice(nodes) {
      return Array.prototype.slice.call(nodes);
    }
  
    function Checkbox(el) {
      this.el = el;
  
      this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
      this.el.addEventListener('click', this.toggle.bind(this));

      var checkboxes = slice(document.querySelectorAll('.checkbox'));
      for (let i =0; i < checkboxes.length; i++){
          if(i === 0){
            checkboxes[i].setAttribute('aria-checked', 'true')
    }
    else{
        checkboxes[i].setAttribute('aria-checked', 'false')
    }
  }
      // Any other set-up we want to do here?
    }
  
    Checkbox.prototype.handleKeyDown = function(e) {
      switch(e.keyCode) {
        case VK_ENTER:
        case VK_SPACE: {
          this.toggle();
          break;
        }
      }
    };
  
    Checkbox.prototype.toggle = function() {
      if (this.el.hasAttribute('checked')) {
        this.el.removeAttribute('checked');
        this.el.setAttribute('aria-checked', 'false')
        // Hmm.
  
      } else {
        this.el.setAttribute('checked', '');
        this.el.setAttribute('aria-checked', 'true')
        
        // Hmmmmm.
  
      }
    };
  
    var checkboxes = slice(document.querySelectorAll('.checkbox'));
    for (var checkbox of checkboxes)
      checkbox.logic = new Checkbox(checkbox);
  
  }());