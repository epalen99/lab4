
/*
 * GET home page.
 */

exports.view = function(req, res){
  /* first image */
  res.render('index', {
    "projects": [
      {"name":"Waiting in Line", 
        "image":"lorempixel.people.1.jpeg", 
        "id":"project1"
      },
  /* second image */
      {"name":"Needfinding", 
        "image":"lorempixel.city.1.jpeg",
        "id":"project2"
      },
  /* third image */
      {"name":"Prototyping", 
      "image":"lorempixel.city.2.jpeg",
      "id":"project3"
      },
  /* fourth image */
      {"name":"Heuristic Evaluation", 
      "image":"lorempixel.people.2.jpeg",
      "id":"project4"
      },
  /* fifth image */
      {"name":"Visualization", 
      "image":"lorempixel.abstract.1.jpeg",
      "id":"project5"
      },
  /* sixth image */
      {"name":"Social Design", 
      "image":"lorempixel.abstract.8.jpeg",
      "id":"project6"
      },
  /* seventh image */
      {"name":"Gestural interaction", 
      "image":"lorempixel.technics.1.jpeg",
      "id":"project7"
      },
  /* eighth image */
      {"name":"Design Tools", 
      "image":"lorempixel.technics.2.jpeg",
      "id":"project8"
      }
    ]
  
  });
};