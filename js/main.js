function toggler() {
		$('[data-toggler]').on('click', function(e) {
    	e.preventDefault();
    	var $this = $(this);
      var hash = $this.attr('href') || $this.data('target');
      if (!hash) return false;
      $this.toggleClass('is-active');
      $(hash).toggleClass('is-show');
    })
}

toggler();