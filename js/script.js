fetch('/component/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data

    const menuBtn = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')

    // Toggle on hamburger click
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation() // stops the click from reaching the document
      mobileMenu.classList.toggle('hidden')
    })

    // Click anywhere outside = close the menu
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden')
      }
    })

  })













// radio buttons of credit card and bank account

function updateActive(selected) {
  document.querySelectorAll('label[id^="label-"]').forEach(label => {
    label.classList.remove('border-green-400', 'bg-green-50')
    label.classList.add('border-transparent')
  })

  const activeLabel = document.getElementById('label-' + selected.value)
  activeLabel.classList.remove('border-transparent')
  activeLabel.classList.add('border-green-400', 'bg-green-50')
}





// chart graph starts here

const ctx = document.getElementById('revenueChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 192);
gradient.addColorStop(0, 'rgba(16, 185, 129, 0.20)');
gradient.addColorStop(1, 'rgba(16, 185, 129, 0.00)');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      data: [280000, 520000, 780000, 1100000, 1500000, 1876580],
      borderColor: '#10b981',
      borderWidth: 2.5,
      fill: true,
      backgroundColor: gradient,
      tension: 0.45,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#10b981',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#111827',
        titleColor: '#9ca3af',
        bodyColor: '#ffffff',
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (item) => ' $' + item.parsed.y.toLocaleString()
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: '#9ca3af', font: { size: 12 } }
      },
      y: { display: false }
    }
  }
});

// chart graph ends here




// Intersection observer



// intersection observer that animates content from downward to upward
const upward = document.querySelectorAll(".uw");


const verticalObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("upward");
      observer.unobserve(entry.target); // stop observing after first trigger
    }
  });
}, {
  threshold: .5,
});


upward.forEach(entry => {
  verticalObserver.observe(entry);
});







// intersection observer that animates content from downward to upward after delay of 0.75 seconds
const upward1 = document.querySelectorAll(".uw1");


const verticalObserver1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("upward");
      observer.unobserve(entry.target); // stop observing after first trigger
    }
  });
}, {
  threshold: .5,
});


upward1.forEach(entry => {
  verticalObserver1.observe(entry);
});



// intersection observer that animates content from upward to downward
const upward2 = document.querySelectorAll(".uw2");


const verticalObserver2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("upward");
      observer.unobserve(entry.target); // stop observing after first trigger
    }
  });
}, {
  threshold: .5,
});


upward2.forEach(entry => {
  verticalObserver2.observe(entry);
});





// intersection obsever that animates content from left to write
const horizontal = document.querySelectorAll(".hz");


const horizontalObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("horizontal");
      observer.unobserve(entry.target); // stop observing after first trigger
    }
  });
}, {
  threshold: .5,
});


horizontal.forEach(entry => {
  horizontalObserver.observe(entry);
});





