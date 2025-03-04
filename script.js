$(document).ready(function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }
  
    $("#darkModeToggle").click(function() {
        if ($("body").hasClass("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
  
    function enableDarkMode() {
        $("body").addClass("dark-mode");
        $(".navbar").addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
        $(".footer").addClass("bg-dark text-light");
        localStorage.setItem("darkMode", "enabled");
    }
  
    function disableDarkMode() {
        $("body").removeClass("dark-mode");
        $(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
        $(".footer").removeClass("bg-dark text-light");
        localStorage.setItem("darkMode", "disabled");
    }
  
    $("#contactForm").submit(function(event) {
        event.preventDefault(); 
  
        $("#formMessage").fadeIn().delay(3000).fadeOut();
  
        $(this).trigger("reset");
    });
  
    $(document).on("click", ".start-quest", function() {
        $(this).text("In Progress").prop("disabled", true);
        alert("Quest Started! Good luck!");
    });
  
    $("#questForm").submit(function(event) {
        event.preventDefault(); 
  
        const questName = $("#questName").val();
        const questDescription = $("#questDescription").val();
        const questReward = $("#questReward").val();
        const questDifficulty = $("#questDifficulty").val();
  
        const questCard = `
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${questName}</h5>
                        <p class="card-text">${questDescription}</p>
                        <p><strong>Reward:</strong> ${questReward}</p>
                        <p><strong>Difficulty:</strong> <span class="badge ${getDifficultyBadgeClass(questDifficulty)}">${questDifficulty}</span></p>
                        <button class="btn btn-primary start-quest">Start Quest</button>
                    </div>
                </div>
            </div>
        `;
  
        $("#questList").append(questCard);
  
        $("#submitMessage").fadeIn().delay(3000).fadeOut();
  
        $(this).trigger("reset");
    });
  
    function getDifficultyBadgeClass(difficulty) {
        switch (difficulty) {
            case 'Easy':
                return 'bg-success';
            case 'Medium':
                return 'bg-warning';
            case 'Hard':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }
  });