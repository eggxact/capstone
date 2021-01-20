const categories = [
    {
        "alias": "3dprinting",
        "title": "3D Printing",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "abruzzese",
        "title": "Abruzzese",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "absinthebars",
        "title": "Absinthe Bars",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "CZ"
        ]
    },
    {
        "alias": "acaibowls",
        "title": "Acai Bowls",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "AR",
            "MX",
            "PL",
            "TR",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "accessories",
        "title": "Accessories",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "accountants",
        "title": "Accountants",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "acnetreatment",
        "title": "Acne Treatment",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "active",
        "title": "Active Life",
        "parents": []
    },
    {
        "alias": "acupuncture",
        "title": "Acupuncture",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "addictionmedicine",
        "title": "Addiction Medicine",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "JP"
        ]
    },
    {
        "alias": "adoptionservices",
        "title": "Adoption Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "adult",
        "title": "Adult",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "adultedu",
        "title": "Adult Education",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "adultentertainment",
        "title": "Adult Entertainment",
        "parents": [
            "nightlife"
        ]
    },
    {
        "alias": "advertising",
        "title": "Advertising",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "aerialfitness",
        "title": "Aerial Fitness",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "aerialtours",
        "title": "Aerial Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "aestheticians",
        "title": "Aestheticians",
        "parents": [
            "medicalspa"
        ],
        "country_blacklist": [
            "FR",
            "AR",
            "MX",
            "BE",
            "CL",
            "CH"
        ]
    },
    {
        "alias": "afghani",
        "title": "Afghan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "TR"
        ]
    },
    {
        "alias": "african",
        "title": "African",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "afrobrazilian",
        "title": "Afro-Brazilian",
        "parents": [
            "religiousorgs"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "agriturismi",
        "title": "Agriturismi",
        "parents": [
            "hotels"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "PL",
            "AT",
            "CL",
            "DE",
            "CH",
            "TW",
            "FR",
            "MX",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "aircraftdealers",
        "title": "Aircraft Dealers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CZ",
            "PT",
            "US"
        ]
    },
    {
        "alias": "aircraftrepairs",
        "title": "Aircraft Repairs",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "airductcleaning",
        "title": "Air Duct Cleaning",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "MY",
            "IE",
            "GB",
            "PH",
            "SG",
            "AU",
            "CA",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "airlines",
        "title": "Airlines",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "airport_shuttles",
        "title": "Airport Shuttles",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "airportlounges",
        "title": "Airport Lounges",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "airports",
        "title": "Airports",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "airportterminals",
        "title": "Airport Terminals",
        "parents": [
            "airports"
        ]
    },
    {
        "alias": "airsoft",
        "title": "Airsoft",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "alentejo",
        "title": "Alentejo",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "algarve",
        "title": "Algarve",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "allergist",
        "title": "Allergists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "alsatian",
        "title": "Alsatian",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR",
            "DE"
        ]
    },
    {
        "alias": "alternativemedicine",
        "title": "Alternative Medicine",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "JP",
            "PL",
            "AT",
            "TW",
            "PT",
            "HK",
            "AR",
            "MY",
            "TR",
            "PH",
            "CL",
            "DE",
            "CH",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "altoatesine",
        "title": "Altoatesine",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "amateursportsteams",
        "title": "Amateur Sports Teams",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "amusementparks",
        "title": "Amusement Parks",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "andalusian",
        "title": "Andalusian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "ES",
            "IT"
        ]
    },
    {
        "alias": "anesthesiologists",
        "title": "Anesthesiologists",
        "parents": [
            "physicians"
        ],
        "country_whitelist": [
            "FR",
            "SE",
            "US",
            "PT",
            "BE",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "animalassistedtherapy",
        "title": "Animal Assisted Therapy",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "animalholistic",
        "title": "Holistic Animal Care",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "animalphysicaltherapy",
        "title": "Animal Physical Therapy",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "animalshelters",
        "title": "Animal Shelters",
        "parents": [
            "pets"
        ]
    },
    {
        "alias": "antiques",
        "title": "Antiques",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "apartmentagents",
        "title": "Apartment Agents",
        "parents": [
            "realestateagents"
        ]
    },
    {
        "alias": "apartments",
        "title": "Apartments",
        "parents": [
            "realestate"
        ]
    },
    {
        "alias": "appliances",
        "title": "Appliances",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "appraisalservices",
        "title": "Appraisal Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "apulian",
        "title": "Apulian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT"
        ]
    },
    {
        "alias": "aquariums",
        "title": "Aquariums",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "aquariumservices",
        "title": "Aquarium Services",
        "parents": [
            "petservices"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "arabian",
        "title": "Arabian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK"
        ]
    },
    {
        "alias": "arabpizza",
        "title": "Arab Pizza",
        "parents": [
            "arabian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "arcades",
        "title": "Arcades",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "archery",
        "title": "Archery",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "architects",
        "title": "Architects",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "architecturaltours",
        "title": "Architectural Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "argentine",
        "title": "Argentine",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "armenian",
        "title": "Armenian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "PL",
            "TR",
            "BE",
            "GB",
            "FR",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "arroceria_paella",
        "title": "Arroceria / Paella",
        "parents": [
            "spanish"
        ],
        "country_whitelist": [
            "ES"
        ]
    },
    {
        "alias": "artclasses",
        "title": "Art Classes",
        "parents": [
            "education"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "artconsultants",
        "title": "Art Consultants",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "artificialturf",
        "title": "Artificial Turf",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "artinstallation",
        "title": "Art Installation",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "PL",
            "AT",
            "PH",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "artmuseums",
        "title": "Art Museums",
        "parents": [
            "museums"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "artrestoration",
        "title": "Art Restoration",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "arts",
        "title": "Arts & Entertainment",
        "parents": []
    },
    {
        "alias": "artsandcrafts",
        "title": "Arts & Crafts",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "artschools",
        "title": "Art Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "artspacerentals",
        "title": "Art Space Rentals",
        "parents": [
            "realestate"
        ],
        "country_whitelist": [
            "JP",
            "SE",
            "US",
            "IE",
            "GB",
            "SG",
            "HK",
            "IT"
        ]
    },
    {
        "alias": "artsupplies",
        "title": "Art Supplies",
        "parents": [
            "artsandcrafts"
        ]
    },
    {
        "alias": "arttours",
        "title": "Art Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "asianfusion",
        "title": "Asian Fusion",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "assistedliving",
        "title": "Assisted Living Facilities",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "astrologers",
        "title": "Astrologers",
        "parents": [
            "psychic_astrology"
        ]
    },
    {
        "alias": "asturian",
        "title": "Asturian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "ES"
        ]
    },
    {
        "alias": "ateliers",
        "title": "Ateliers",
        "parents": [
            "artsandcrafts"
        ],
        "country_whitelist": [
            "JP",
            "TR",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "IT"
        ]
    },
    {
        "alias": "attractionfarms",
        "title": "Attraction Farms",
        "parents": [
            "farms"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "PT",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "atvrentals",
        "title": "ATV Rentals/Tours",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "AR",
            "SE",
            "US",
            "PL",
            "AT",
            "BE",
            "CL",
            "DE",
            "NO",
            "CH",
            "NL",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "auctionhouses",
        "title": "Auction Houses",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MY",
            "TR",
            "PH",
            "CL",
            "TW",
            "HK"
        ]
    },
    {
        "alias": "audiologist",
        "title": "Audiologist",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "CH",
            "CZ",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "audiovisualequipmentrental",
        "title": "Audio/Visual Equipment Rental",
        "parents": [
            "partyequipmentrentals"
        ],
        "country_whitelist": [
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "australian",
        "title": "Australian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "austrian",
        "title": "Austrian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK",
            "ES"
        ]
    },
    {
        "alias": "authorized_postal_representative",
        "title": "Authorized Postal Representative",
        "parents": [
            "publicservicesgovt"
        ],
        "country_whitelist": [
            "SE",
            "NO"
        ]
    },
    {
        "alias": "auto",
        "title": "Automotive",
        "parents": []
    },
    {
        "alias": "auto_detailing",
        "title": "Auto Detailing",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "BR",
            "AU",
            "ES"
        ]
    },
    {
        "alias": "autocustomization",
        "title": "Auto Customization",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "PL",
            "AT",
            "CL",
            "DE",
            "CH",
            "SG",
            "MX",
            "PT",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "autodamageassessment",
        "title": "Car Inspectors",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "BE",
            "DK",
            "NO",
            "DE",
            "NL",
            "PT",
            "BR"
        ]
    },
    {
        "alias": "autoelectric",
        "title": "Auto Electric Services",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "CL",
            "MX",
            "PT",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "autoglass",
        "title": "Auto Glass Services",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "ES"
        ]
    },
    {
        "alias": "autoinsurance",
        "title": "Auto Insurance",
        "parents": [
            "insurance"
        ],
        "country_blacklist": [
            "NZ",
            "MY",
            "AT",
            "GB",
            "IE",
            "PH",
            "DE",
            "CH",
            "SG",
            "TW",
            "FR",
            "FI",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "autoloanproviders",
        "title": "Auto Loan Providers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "PL",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "IT",
            "AU",
            "CZ",
            "US",
            "TR",
            "MY",
            "IE",
            "PH",
            "SG"
        ]
    },
    {
        "alias": "autopartssupplies",
        "title": "Auto Parts & Supplies",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "autorepair",
        "title": "Auto Repair",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "autosecurity",
        "title": "Auto Security",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "autoupholstery",
        "title": "Auto Upholstery",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "auvergnat",
        "title": "Auvergnat",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "aviationservices",
        "title": "Aviation Services",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "awnings",
        "title": "Awnings",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "axethrowing",
        "title": "Axe Throwing",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "GB",
            "CA",
            "US"
        ]
    },
    {
        "alias": "ayurveda",
        "title": "Ayurveda",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "azores",
        "title": "Azores",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "baby_gear",
        "title": "Baby Gear & Furniture",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "backflowservices",
        "title": "Backflow Services",
        "parents": [
            "plumbing"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "backshop",
        "title": "Backshop",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "baden",
        "title": "Baden",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "badminton",
        "title": "Badminton",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "SG",
            "BR",
            "PL"
        ]
    },
    {
        "alias": "bagels",
        "title": "Bagels",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "AU",
            "ES"
        ]
    },
    {
        "alias": "baguettes",
        "title": "Baguettes",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "TR",
            "DE",
            "NO",
            "MX",
            "PT",
            "IT"
        ]
    },
    {
        "alias": "bailbondsmen",
        "title": "Bail Bondsmen",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "PT",
            "US"
        ]
    },
    {
        "alias": "bakeries",
        "title": "Bakeries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "balloonservices",
        "title": "Balloon Services",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "PL",
            "AT",
            "BE",
            "IE",
            "GB",
            "DE",
            "CH",
            "SG",
            "NL",
            "CA",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "bangladeshi",
        "title": "Bangladeshi",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "TR",
            "PT",
            "DK",
            "ES"
        ]
    },
    {
        "alias": "bankruptcy",
        "title": "Bankruptcy Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "banks",
        "title": "Banks & Credit Unions",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "barbers",
        "title": "Barbers",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "barcrawl",
        "title": "Bar Crawl",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "PL",
            "AT",
            "DE",
            "CH",
            "MX",
            "AU"
        ]
    },
    {
        "alias": "barreclasses",
        "title": "Barre Classes",
        "parents": [
            "fitness"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "BE",
            "DK",
            "GB",
            "IE",
            "NO",
            "NL",
            "FI",
            "PT",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "bars",
        "title": "Bars",
        "parents": [
            "nightlife"
        ]
    },
    {
        "alias": "bartenders",
        "title": "Bartenders",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "MY",
            "PL",
            "AT",
            "TR",
            "GB",
            "IE",
            "PH",
            "NO",
            "CH",
            "SG",
            "TW",
            "FI",
            "HK"
        ]
    },
    {
        "alias": "bartendingschools",
        "title": "Bartending Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "baseballfields",
        "title": "Baseball Fields",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "basketballcourts",
        "title": "Basketball Courts",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NL",
            "SE",
            "PL",
            "GB",
            "CA",
            "IE",
            "BR"
        ]
    },
    {
        "alias": "basque",
        "title": "Basque",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "PT",
            "TR",
            "DK",
            "SG",
            "AU"
        ]
    },
    {
        "alias": "bathing_area",
        "title": "Bathing Area",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "SE",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "FI",
            "PT"
        ]
    },
    {
        "alias": "batterystores",
        "title": "Battery Stores",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "battingcages",
        "title": "Batting Cages",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP",
            "US"
        ]
    },
    {
        "alias": "bavarian",
        "title": "Bavarian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "bbq",
        "title": "Barbeque",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "BR",
            "AU"
        ]
    },
    {
        "alias": "beachbars",
        "title": "Beach Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "JP",
            "US",
            "MY",
            "PL",
            "TR",
            "BE",
            "GB",
            "IE",
            "PH",
            "TW",
            "FI",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "beachequipmentrental",
        "title": "Beach Equipment Rentals",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "beaches",
        "title": "Beaches",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "beachvolleyball",
        "title": "Beach Volleyball",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "PL",
            "BE",
            "GB",
            "TW",
            "NL",
            "HK",
            "CA",
            "IT",
            "US",
            "MY",
            "TR",
            "IE",
            "PH",
            "CH",
            "FR"
        ]
    },
    {
        "alias": "beautysvc",
        "title": "Beauty & Spas",
        "parents": []
    },
    {
        "alias": "bedbreakfast",
        "title": "Bed & Breakfast",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "beerbar",
        "title": "Beer Bar",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "beergarden",
        "title": "Beer Garden",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "CZ",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "beergardens",
        "title": "Beer Gardens",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "SE",
            "US",
            "PL",
            "DK",
            "GB",
            "IE",
            "NO",
            "FR",
            "MX",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "beerhall",
        "title": "Beer Hall",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "beertours",
        "title": "Beer Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "behavioranalysts",
        "title": "Behavior Analysts",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "beira",
        "title": "Beira",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "beisl",
        "title": "Beisl",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AT"
        ]
    },
    {
        "alias": "belgian",
        "title": "Belgian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "bento",
        "title": "Bento",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "berrichon",
        "title": "Berrichon",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "bespoke",
        "title": "Bespoke Clothing",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "SE",
            "TR",
            "CL",
            "MX",
            "FI",
            "BR"
        ]
    },
    {
        "alias": "bettingcenters",
        "title": "Betting Centers",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "NZ",
            "FR",
            "US",
            "FI",
            "CA",
            "NO",
            "SG"
        ]
    },
    {
        "alias": "beverage_stores",
        "title": "Beverage Store",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "TR",
            "AT",
            "BE",
            "CL",
            "DE",
            "CH",
            "NL",
            "PT",
            "AU",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "bicyclepaths",
        "title": "Bicycle Paths",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "US",
            "MY",
            "TR",
            "AT",
            "PH",
            "DE",
            "CH",
            "TW",
            "FR",
            "HK",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "bicycles",
        "title": "Bicycles",
        "parents": [],
        "country_whitelist": [
            "CZ",
            "PT",
            "DK",
            "PL"
        ]
    },
    {
        "alias": "bike_repair_maintenance",
        "title": "Bike Repair/Maintenance",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "bikeassociations",
        "title": "Bike Associations",
        "parents": [
            "bicycles"
        ],
        "country_whitelist": [
            "DK",
            "PT"
        ]
    },
    {
        "alias": "bikeparking",
        "title": "Bike Parking",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "bikerentals",
        "title": "Bike Rentals",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "bikerepair",
        "title": "Bike Repair",
        "parents": [
            "bicycles"
        ],
        "country_whitelist": [
            "DK",
            "PT"
        ]
    },
    {
        "alias": "bikes",
        "title": "Bikes",
        "parents": [
            "sportgoods"
        ]
    },
    {
        "alias": "bikesharing",
        "title": "Bike Sharing",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "bikeshop",
        "title": "Bike Shop",
        "parents": [
            "bicycles"
        ],
        "country_whitelist": [
            "DK",
            "PT"
        ]
    },
    {
        "alias": "biketours",
        "title": "Bike tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "billingservices",
        "title": "Billing Services",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "US",
            "SE"
        ]
    },
    {
        "alias": "bingo",
        "title": "Bingo Halls",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "NZ",
            "AR",
            "SE",
            "US",
            "DK",
            "GB",
            "IE",
            "CL",
            "NO",
            "MX",
            "FI",
            "AU",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "biohazardcleanup",
        "title": "Biohazard Cleanup",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "birdshops",
        "title": "Bird Shops",
        "parents": [
            "petstore"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "BE",
            "DK",
            "NO",
            "DE",
            "SG",
            "NL",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "bistros",
        "title": "Bistros",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "US"
        ]
    },
    {
        "alias": "blacksea",
        "title": "Black Sea",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "blinds",
        "title": "Shades & Blinds",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "blooddonation",
        "title": "Blood & Plasma Donation Centers",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "MY",
            "BE",
            "IE",
            "GB",
            "PH",
            "SG",
            "TW",
            "NL",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "blowfish",
        "title": "Blowfish",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "blowoutservices",
        "title": "Blow Dry/Out Services",
        "parents": [
            "hair"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "TR",
            "DK",
            "GB",
            "IE",
            "NO",
            "FR",
            "PT",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "boatcharters",
        "title": "Boat Charters",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "boatdealers",
        "title": "Boat Dealers",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "JP",
            "MY",
            "TR",
            "PH",
            "CL",
            "TW",
            "FR",
            "FI",
            "HK",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "boating",
        "title": "Boating",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "boatpartsandsupplies",
        "title": "Boat Parts & Supplies",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "boatrepair",
        "title": "Boat Repair",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "boattours",
        "title": "Boat Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "bobsledding",
        "title": "Bobsledding",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "bocceball",
        "title": "Bocce Ball",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "bodycontouring",
        "title": "Body Contouring",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "FR",
            "IT"
        ]
    },
    {
        "alias": "bodyshops",
        "title": "Body Shops",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "bookbinding",
        "title": "Bookbinding",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "bookkeepers",
        "title": "Bookkeepers",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "MY",
            "BE",
            "IE",
            "GB",
            "PH",
            "SG",
            "TW",
            "NL",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "bookstores",
        "title": "Bookstores",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "bootcamps",
        "title": "Boot Camps",
        "parents": [
            "fitness"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "SE",
            "US",
            "PL",
            "DK",
            "NO",
            "PT",
            "AU",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "boudoirphotography",
        "title": "Boudoir Photography",
        "parents": [
            "photographers"
        ],
        "country_whitelist": [
            "CA",
            "SE",
            "US",
            "DE"
        ]
    },
    {
        "alias": "bouncehouserentals",
        "title": "Bounce House Rentals",
        "parents": [
            "partyequipmentrentals"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "US",
            "PL",
            "AT",
            "BE",
            "DK",
            "IE",
            "GB",
            "NO",
            "DE",
            "CH",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "bourguignon",
        "title": "Bourguignon",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "bowling",
        "title": "Bowling",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "boxing",
        "title": "Boxing",
        "parents": [
            "fitness"
        ],
        "country_blacklist": [
            "SE",
            "FI",
            "PL",
            "TR",
            "ES",
            "SG",
            "AU"
        ]
    },
    {
        "alias": "brasseries",
        "title": "Brasseries",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "AR"
        ]
    },
    {
        "alias": "brazilian",
        "title": "Brazilian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "brazilianempanadas",
        "title": "Brazilian Empanadas",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "brazilianjiujitsu",
        "title": "Brazilian Jiu-jitsu",
        "parents": [
            "martialarts"
        ]
    },
    {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "breweries",
        "title": "Breweries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "brewingsupplies",
        "title": "Brewing Supplies",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "HK",
            "JP",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "brewpubs",
        "title": "Brewpubs",
        "parents": [
            "breweries"
        ],
        "country_blacklist": [
            "FR",
            "AR",
            "MX",
            "IT",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "bridal",
        "title": "Bridal",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "british",
        "title": "British",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "bubblesoccer",
        "title": "Bubble Soccer",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "bubbletea",
        "title": "Bubble Tea",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "AR",
            "MX",
            "TR",
            "AT",
            "CH",
            "ES"
        ]
    },
    {
        "alias": "buddhist_temples",
        "title": "Buddhist Temples",
        "parents": [
            "religiousorgs"
        ]
    },
    {
        "alias": "buffets",
        "title": "Buffets",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "buildingsupplies",
        "title": "Building Supplies",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "bulgarian",
        "title": "Bulgarian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "NZ",
            "TR",
            "DK",
            "NO",
            "SG",
            "NL",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "bulkbilling",
        "title": "Bulk Billing",
        "parents": [
            "medcenters"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "bungeejumping",
        "title": "Bungee Jumping",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "burgers",
        "title": "Burgers",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "burmese",
        "title": "Burmese",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "PT",
            "TR",
            "DK",
            "ES"
        ]
    },
    {
        "alias": "buses",
        "title": "Buses",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "businessconsulting",
        "title": "Business Consulting",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "TR",
            "HK",
            "TW"
        ]
    },
    {
        "alias": "businessfinancing",
        "title": "Business Financing",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "businesslawyers",
        "title": "Business Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "DK",
            "GB",
            "IE",
            "NO",
            "PT",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "busrental",
        "title": "Bus Rental",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "busstations",
        "title": "Bus Stations",
        "parents": [
            "transport"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "bustours",
        "title": "Bus Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "butcher",
        "title": "Butcher",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "c_and_mh",
        "title": "Counseling & Mental Health",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "cabaret",
        "title": "Cabaret",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "cabinetry",
        "title": "Cabinetry",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "cablecars",
        "title": "Cable Cars",
        "parents": [
            "transport"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "JP",
            "US",
            "TR",
            "AT",
            "DE",
            "CH",
            "FR",
            "PT",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "cafes",
        "title": "Cafes",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "FI",
            "ES",
            "AR"
        ]
    },
    {
        "alias": "cafeteria",
        "title": "Cafeteria",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "NZ",
            "FR",
            "SE",
            "SG",
            "IE",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "cajun",
        "title": "Cajun/Creole",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "PT",
            "SG",
            "AU",
            "ES"
        ]
    },
    {
        "alias": "cakeshop",
        "title": "Patisserie/Cake Shop",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "calabrian",
        "title": "Calabrian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT",
            "US"
        ]
    },
    {
        "alias": "calligraphy",
        "title": "Calligraphy",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "TR",
            "BE",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "cambodian",
        "title": "Cambodian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "PT",
            "TR",
            "DK",
            "ES"
        ]
    },
    {
        "alias": "campgrounds",
        "title": "Campgrounds",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "candlestores",
        "title": "Candle Stores",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "candy",
        "title": "Candy Stores",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "cannabis_clinics",
        "title": "Cannabis Clinics",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US",
            "TR",
            "PL",
            "GB",
            "IE",
            "NL",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "cannabiscollective",
        "title": "Cannabis Collective",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "cannabisdispensaries",
        "title": "Cannabis Dispensaries",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "cannabisreferrals",
        "title": "Medical Cannabis Referrals",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "cannabistours",
        "title": "Cannabis Tours",
        "parents": [
            "cannabis_clinics"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "canteen",
        "title": "Canteen",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "PL",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "FI",
            "IT"
        ]
    },
    {
        "alias": "cantonese",
        "title": "Cantonese",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "SE",
            "BE",
            "GB",
            "TW",
            "NL",
            "HK",
            "CA",
            "IT",
            "AU",
            "AR",
            "US",
            "MY",
            "SG",
            "FR"
        ]
    },
    {
        "alias": "canyoneering",
        "title": "Canyoneering",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "car_dealers",
        "title": "Car Dealers",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "carauctions",
        "title": "Car Auctions",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "HK",
            "PH",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "carbrokers",
        "title": "Car Brokers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "AU",
            "AR",
            "US"
        ]
    },
    {
        "alias": "carbuyers",
        "title": "Car Buyers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "AU",
            "CZ",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "NO",
            "DE",
            "CH",
            "SG",
            "BR"
        ]
    },
    {
        "alias": "cardioclasses",
        "title": "Cardio Classes",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "cardiology",
        "title": "Cardiologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "careercounseling",
        "title": "Career Counseling",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "caribbean",
        "title": "Caribbean",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "TR",
            "PT"
        ]
    },
    {
        "alias": "caricatures",
        "title": "Caricatures",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "PL",
            "DK",
            "NO",
            "SG",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "carousels",
        "title": "Carousels",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "carpenters",
        "title": "Carpenters",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "carpet_cleaning",
        "title": "Carpet Cleaning",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "carpetdyeing",
        "title": "Carpet Dyeing",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "MY",
            "PL",
            "GB",
            "PH",
            "IE",
            "SG",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "carpeting",
        "title": "Carpeting",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "carpetinstallation",
        "title": "Carpet Installation",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "carrental",
        "title": "Car Rental",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "carshares",
        "title": "Car Share Services",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "JP",
            "TR",
            "BE",
            "SG",
            "TW",
            "NL",
            "FI",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "carwash",
        "title": "Car Wash",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "carwindowtinting",
        "title": "Car Window Tinting",
        "parents": [
            "autoglass"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "BE",
            "IE",
            "GB",
            "SG",
            "NL",
            "AU",
            "CA",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "casinos",
        "title": "Casinos",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "JP",
            "HK"
        ]
    },
    {
        "alias": "castles",
        "title": "Castles",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "SE",
            "AT",
            "BE",
            "DK",
            "GB",
            "NO",
            "DE",
            "CH",
            "FR",
            "FI",
            "PT",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "catalan",
        "title": "Catalan",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "TR",
            "CL",
            "FR",
            "MX",
            "PT",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "catering",
        "title": "Caterers",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "cellphoneaccessories",
        "title": "Mobile Phone Accessories",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "FI",
            "PL",
            "MY",
            "TR",
            "PH"
        ]
    },
    {
        "alias": "centralbrazilian",
        "title": "Central Brazilian",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "ceremonialclothing",
        "title": "Ceremonial Clothing",
        "parents": [
            "fashion"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "challengecourses",
        "title": "Challenge Courses",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "SE",
            "US",
            "PL",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "champagne_bars",
        "title": "Champagne Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "AU"
        ]
    },
    {
        "alias": "cheekufta",
        "title": "Chee Kufta",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR",
            "DE"
        ]
    },
    {
        "alias": "cheerleading",
        "title": "Cheerleading",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "AT",
            "CA",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "cheese",
        "title": "Cheese Shops",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "cheesesteaks",
        "title": "Cheesesteaks",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "PL",
            "GB",
            "CA",
            "IE",
            "AU"
        ]
    },
    {
        "alias": "cheesetastingclasses",
        "title": "Cheese Tasting Classes",
        "parents": [
            "tastingclasses"
        ]
    },
    {
        "alias": "chicken_wings",
        "title": "Chicken Wings",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "JP",
            "BE",
            "DK",
            "CL",
            "NO",
            "CH",
            "FR",
            "NL",
            "FI",
            "PT",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "chickenshop",
        "title": "Chicken Shop",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "childbirthedu",
        "title": "Childbirth Education",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "IT",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "DE",
            "NO",
            "CH",
            "SG",
            "FR",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "childcare",
        "title": "Child Care & Day Care",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "childcloth",
        "title": "Children's Clothing",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "childproofing",
        "title": "Childproofing",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "BR",
            "PT",
            "US"
        ]
    },
    {
        "alias": "childrensmuseums",
        "title": "Children's Museums",
        "parents": [
            "museums"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "chilean",
        "title": "Chilean",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "BR",
            "FR",
            "CL"
        ]
    },
    {
        "alias": "chimneycakes",
        "title": "Chimney Cakes",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CZ",
            "PL",
            "FR",
            "US"
        ]
    },
    {
        "alias": "chimneysweeps",
        "title": "Chimney Sweeps",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "MX"
        ]
    },
    {
        "alias": "chinese",
        "title": "Chinese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "chinesebazaar",
        "title": "Chinese Bazaar",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "PT",
            "ES"
        ]
    },
    {
        "alias": "chinesemartialarts",
        "title": "Chinese Martial Arts",
        "parents": [
            "martialarts"
        ]
    },
    {
        "alias": "chiropractors",
        "title": "Chiropractors",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "chocolate",
        "title": "Chocolatiers & Shops",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "choirs",
        "title": "Choirs",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "US",
            "PL",
            "BE",
            "SG",
            "NL",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "christmastrees",
        "title": "Christmas Trees",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "churches",
        "title": "Churches",
        "parents": [
            "religiousorgs"
        ]
    },
    {
        "alias": "churros",
        "title": "Churros",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "AR",
            "MX",
            "PT",
            "CL",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "cideries",
        "title": "Cideries",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "JP",
            "TR",
            "BE",
            "DK",
            "NO",
            "FR",
            "NL",
            "IT"
        ]
    },
    {
        "alias": "cigarbars",
        "title": "Cigar Bars",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "circuittraininggyms",
        "title": "Circuit Training Gyms",
        "parents": [
            "gyms"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "circusschools",
        "title": "Circus Schools",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "AR",
            "CL",
            "FR",
            "MX",
            "FI",
            "PT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "civiccenter",
        "title": "Civic Center",
        "parents": [
            "publicservicesgovt"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "climbing",
        "title": "Climbing",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "clockrepair",
        "title": "Clock Repair",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "clothingrental",
        "title": "Clothing Rental",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "clowns",
        "title": "Clowns",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "CZ",
            "SE",
            "FI",
            "PL",
            "TR",
            "SG"
        ]
    },
    {
        "alias": "clubcrawl",
        "title": "Club Crawl",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "cocktailbars",
        "title": "Cocktail Bars",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "coffee",
        "title": "Coffee & Tea",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "coffeeroasteries",
        "title": "Coffee Roasteries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "coffeeshops",
        "title": "Coffeeshops",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "PT",
            "NL"
        ]
    },
    {
        "alias": "coffeeteasupplies",
        "title": "Coffee & Tea Supplies",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "US",
            "MY",
            "PH",
            "CL",
            "MX",
            "FI",
            "PT",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "collegecounseling",
        "title": "College Counseling",
        "parents": [
            "education"
        ],
        "country_whitelist": [
            "PT",
            "US"
        ]
    },
    {
        "alias": "collegeuniv",
        "title": "Colleges & Universities",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "colombian",
        "title": "Colombian",
        "parents": [
            "latin"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "BE",
            "CL",
            "FR",
            "MX",
            "FI",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "colonics",
        "title": "Colonics",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "DK",
            "GB",
            "IE",
            "NO",
            "SG",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "comedyclubs",
        "title": "Comedy Clubs",
        "parents": [
            "nightlife"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "comfortfood",
        "title": "Comfort Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "JP",
            "AR",
            "US",
            "MX",
            "FI",
            "CA",
            "CL"
        ]
    },
    {
        "alias": "comicbooks",
        "title": "Comic Books",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "commercialrealestate",
        "title": "Commercial Real Estate",
        "parents": [
            "realestate"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "BE",
            "DK",
            "NO",
            "DE",
            "NL",
            "PT",
            "CA",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "commissionedartists",
        "title": "Commissioned Artists",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "communitybookbox",
        "title": "Community Book Box",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "AR",
            "JP",
            "MY",
            "PH",
            "CL",
            "FR",
            "MX",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "communitycenters",
        "title": "Community Centers",
        "parents": [
            "publicservicesgovt"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "US",
            "DK",
            "GB",
            "IE",
            "NO",
            "PT",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "communitygardens",
        "title": "Community Gardens",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "GB",
            "PT",
            "CA",
            "IT",
            "AU",
            "US",
            "DK",
            "IE",
            "DE",
            "NO",
            "SG",
            "FR",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "computers",
        "title": "Computers",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "concept_shops",
        "title": "Concept Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "SE",
            "US",
            "PL",
            "TR",
            "CL",
            "SG",
            "HK",
            "CA",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "conciergemedicine",
        "title": "Concierge Medicine",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "condominiums",
        "title": "Condominiums",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "NZ",
            "AU"
        ]
    },
    {
        "alias": "congee",
        "title": "Congee",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "TW",
            "SG",
            "MY",
            "HK"
        ]
    },
    {
        "alias": "consumerlaw",
        "title": "Consumer Law",
        "parents": [
            "lawyers"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "SE",
            "TR",
            "DK",
            "NO",
            "TW",
            "FI",
            "HK",
            "ES"
        ]
    },
    {
        "alias": "contractlaw",
        "title": "Contract Law",
        "parents": [
            "lawyers"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "contractors",
        "title": "Contractors",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "convenience",
        "title": "Convenience Stores",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "conveyorsushi",
        "title": "Conveyor Belt Sushi",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP",
            "SE",
            "US",
            "PL",
            "AT",
            "BE",
            "DE",
            "CH",
            "SG",
            "TW",
            "NL",
            "HK",
            "IT"
        ]
    },
    {
        "alias": "cookingclasses",
        "title": "Cooking Classes",
        "parents": [
            "artsandcrafts"
        ]
    },
    {
        "alias": "cookingschools",
        "title": "Cooking Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "copyshops",
        "title": "Printing Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "corsican",
        "title": "Corsican",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "cosmeticdentists",
        "title": "Cosmetic Dentists",
        "parents": [
            "dentists"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "cosmetics",
        "title": "Cosmetics & Beauty Supply",
        "parents": [
            "shopping",
            "beautysvc"
        ]
    },
    {
        "alias": "cosmeticsurgeons",
        "title": "Cosmetic Surgeons",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "cosmetology_schools",
        "title": "Cosmetology Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "costumes",
        "title": "Costumes",
        "parents": [
            "artsandcrafts"
        ]
    },
    {
        "alias": "countertopinstall",
        "title": "Countertop Installation",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "CZ",
            "FR",
            "AT",
            "IT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "countryclubs",
        "title": "Country Clubs",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "AR",
            "JP",
            "US",
            "CL",
            "SG",
            "TW",
            "MX",
            "HK",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "countrydancehalls",
        "title": "Country Dance Halls",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "US",
            "SE"
        ]
    },
    {
        "alias": "couriers",
        "title": "Couriers & Delivery Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "courthouses",
        "title": "Courthouses",
        "parents": [
            "publicservicesgovt"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "GB",
            "TW",
            "HK",
            "CA",
            "AR",
            "MY",
            "TR",
            "IE",
            "PH",
            "CL",
            "SG",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "courtreporters",
        "title": "Court Reporters",
        "parents": [
            "legalservices"
        ],
        "country_whitelist": [
            "CA",
            "NL",
            "BE",
            "US"
        ]
    },
    {
        "alias": "cprclasses",
        "title": "CPR Classes",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "PT",
            "AU",
            "US",
            "SE"
        ]
    },
    {
        "alias": "craneservices",
        "title": "Crane Services",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "JP",
            "MY",
            "TR",
            "PH",
            "TW",
            "FR",
            "FI",
            "HK"
        ]
    },
    {
        "alias": "cremationservices",
        "title": "Cremation Services",
        "parents": [
            "funeralservices"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "creperies",
        "title": "Creperies",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "criminaldefense",
        "title": "Criminal Defense Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "crisispregnancycenters",
        "title": "Crisis Pregnancy Centers",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "cryotherapy",
        "title": "Cryotherapy",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "IT",
            "US"
        ]
    },
    {
        "alias": "csa",
        "title": "CSA",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "cuban",
        "title": "Cuban",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK",
            "SG",
            "TR"
        ]
    },
    {
        "alias": "cucinacampana",
        "title": "Cucina campana",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "culturalcenter",
        "title": "Cultural Center",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "NZ",
            "TR",
            "IE",
            "CA"
        ]
    },
    {
        "alias": "cupcakes",
        "title": "Cupcakes",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CZ",
            "TR",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "currencyexchange",
        "title": "Currency Exchange",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "currysausage",
        "title": "Curry Sausage",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "customcakes",
        "title": "Custom Cakes",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CH",
            "FR",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "custommerchandise",
        "title": "Customized Merchandise",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "customsbrokers",
        "title": "Customs Brokers",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "cyclingclasses",
        "title": "Cycling Classes",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "MX",
            "PT",
            "IE",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "cypriot",
        "title": "Cypriot",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "czech",
        "title": "Czech",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "US",
            "PL",
            "BE",
            "DK",
            "GB",
            "IE",
            "NO",
            "DE",
            "FR",
            "FI",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "czechslovakian",
        "title": "Czech/Slovakian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "MX",
            "PT",
            "AR"
        ]
    },
    {
        "alias": "dagashi",
        "title": "Dagashi",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "damagerestoration",
        "title": "Damage Restoration",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "PT",
            "TR",
            "CA",
            "SG",
            "AU"
        ]
    },
    {
        "alias": "dance_schools",
        "title": "Dance Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "danceclubs",
        "title": "Dance Clubs",
        "parents": [
            "nightlife"
        ]
    },
    {
        "alias": "dancerestaurants",
        "title": "Dance Restaurants",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "FI"
        ]
    },
    {
        "alias": "dancestudio",
        "title": "Dance Studios",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "dancewear",
        "title": "Dance Wear",
        "parents": [
            "sportswear"
        ]
    },
    {
        "alias": "danish",
        "title": "Danish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "FR",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "dartarenas",
        "title": "Dart Arenas",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "US",
            "PL",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "datarecovery",
        "title": "Data Recovery",
        "parents": [
            "itservices"
        ],
        "country_blacklist": [
            "JP",
            "NL",
            "FI",
            "MY",
            "HK",
            "PH",
            "TW"
        ]
    },
    {
        "alias": "daycamps",
        "title": "Day Camps",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "debtrelief",
        "title": "Debt Relief Services",
        "parents": [
            "financialservices"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "decksrailing",
        "title": "Decks & Railing",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "delicatessen",
        "title": "Delicatessen",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "US"
        ]
    },
    {
        "alias": "delis",
        "title": "Delis",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FR",
            "NL",
            "SE",
            "PT",
            "BE",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "demolitionservices",
        "title": "Demolition Services",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "PT",
            "AU",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "dentalhygeiniststorefront",
        "title": "Storefront Clinics",
        "parents": [
            "dentalhygienists"
        ],
        "country_whitelist": [
            "CA"
        ]
    },
    {
        "alias": "dentalhygienists",
        "title": "Dental Hygienists",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "DE",
            "NL",
            "US",
            "PT",
            "DK",
            "CA",
            "NO"
        ]
    },
    {
        "alias": "dentalhygienistsmobile",
        "title": "Mobile Clinics",
        "parents": [
            "dentalhygienists"
        ],
        "country_whitelist": [
            "CA"
        ]
    },
    {
        "alias": "dentists",
        "title": "Dentists",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "departmentsofmotorvehicles",
        "title": "Departments of Motor Vehicles",
        "parents": [
            "publicservicesgovt"
        ],
        "country_blacklist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "deptstores",
        "title": "Department Stores",
        "parents": [
            "fashion",
            "shopping"
        ]
    },
    {
        "alias": "dermatology",
        "title": "Dermatologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "desserts",
        "title": "Desserts",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "diagnosticimaging",
        "title": "Diagnostic Imaging",
        "parents": [
            "diagnosticservices"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "GB",
            "IE",
            "CL",
            "FR",
            "MX",
            "PT",
            "AU",
            "CA",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "diagnosticservices",
        "title": "Diagnostic Services",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "dialysisclinics",
        "title": "Dialysis Clinics",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "TR",
            "CL",
            "MX",
            "PT",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "diamondbuyers",
        "title": "Diamond Buyers",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "dietitians",
        "title": "Dietitians",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "digitizingservices",
        "title": "Digitizing Services",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "DK",
            "BR",
            "US",
            "NO"
        ]
    },
    {
        "alias": "dimsum",
        "title": "Dim Sum",
        "parents": [
            "chinese"
        ],
        "country_blacklist": [
            "TR",
            "BR",
            "PT"
        ]
    },
    {
        "alias": "diners",
        "title": "Diners",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "AU",
            "SE"
        ]
    },
    {
        "alias": "dinnertheater",
        "title": "Dinner Theater",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "NL",
            "BE",
            "IT"
        ]
    },
    {
        "alias": "disabilitylaw",
        "title": "Disability Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "discgolf",
        "title": "Disc Golf",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "DK",
            "SG",
            "AU"
        ]
    },
    {
        "alias": "discountstore",
        "title": "Discount Store",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "distilleries",
        "title": "Distilleries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "divebars",
        "title": "Dive Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "CZ",
            "FR",
            "NL",
            "BE",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "diveshops",
        "title": "Dive Shops",
        "parents": [
            "sportgoods"
        ],
        "country_whitelist": [
            "NZ",
            "AR",
            "JP",
            "US",
            "AT",
            "CL",
            "DE",
            "CH",
            "MX",
            "AU",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "diving",
        "title": "Diving",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "divorce",
        "title": "Divorce & Family Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "diyautoshop",
        "title": "DIY Auto Shop",
        "parents": [
            "autorepair"
        ],
        "country_whitelist": [
            "US",
            "PT",
            "AT",
            "DE",
            "CH",
            "AU"
        ]
    },
    {
        "alias": "diyfood",
        "title": "Do-It-Yourself Food",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "SE",
            "AT",
            "CL",
            "DE",
            "CH",
            "FR",
            "MX",
            "FI",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "djs",
        "title": "DJs",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "dog_parks",
        "title": "Dog Parks",
        "parents": [
            "parks"
        ]
    },
    {
        "alias": "dogwalkers",
        "title": "Dog Walkers",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "dolmusstation",
        "title": "Dolmus Station",
        "parents": [
            "transport"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "dominican",
        "title": "Dominican",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "donairs",
        "title": "Donairs",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CZ",
            "FR",
            "PL",
            "TR",
            "BE",
            "DK",
            "CA"
        ]
    },
    {
        "alias": "donationcenter",
        "title": "Donation Center",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "donburi",
        "title": "Donburi",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP",
            "HK"
        ]
    },
    {
        "alias": "donuts",
        "title": "Donuts",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "ES"
        ]
    },
    {
        "alias": "doorsales",
        "title": "Door Sales/Installation",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "JP",
            "SE",
            "TW",
            "HK",
            "AR",
            "MY",
            "TR",
            "DK",
            "IE",
            "PH",
            "CL",
            "NO",
            "FR",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "doulas",
        "title": "Doulas",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CZ",
            "FR",
            "US",
            "PT",
            "BE",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "dramaschools",
        "title": "Drama Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "driedfruit",
        "title": "Dried Fruit",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "JP",
            "SE",
            "PL",
            "TR",
            "CL",
            "TW",
            "MX",
            "HK",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "driveintheater",
        "title": "Drive-In Theater",
        "parents": [
            "movietheaters"
        ],
        "country_blacklist": [
            "FR",
            "AR",
            "MX",
            "PL",
            "CL"
        ]
    },
    {
        "alias": "drivethrubars",
        "title": "Drive-Thru Bars",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "driving_schools",
        "title": "Driving Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "drones",
        "title": "Drones",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "drugstores",
        "title": "Drugstores",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "AR",
            "SE",
            "TR",
            "DK",
            "CL",
            "NO",
            "FR",
            "MX"
        ]
    },
    {
        "alias": "dryclean",
        "title": "Dry Cleaning",
        "parents": [
            "laundryservices"
        ]
    },
    {
        "alias": "drywall",
        "title": "Drywall Installation & Repair",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "JP",
            "HK"
        ]
    },
    {
        "alias": "duilawyers",
        "title": "DUI Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "CA",
            "US",
            "DE"
        ]
    },
    {
        "alias": "duischools",
        "title": "DUI Schools",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "dumplings",
        "title": "Dumplings",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "PL",
            "AT",
            "BE",
            "GB",
            "IE",
            "DE",
            "CH",
            "SG",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "dumpsterrental",
        "title": "Dumpster Rental",
        "parents": [
            "junkremovalandhauling"
        ],
        "country_whitelist": [
            "NZ",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "HK",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "DE",
            "NO",
            "CH",
            "SG"
        ]
    },
    {
        "alias": "duplicationservices",
        "title": "Duplication Services",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "dutyfreeshops",
        "title": "Duty-Free Shops",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "earnosethroat",
        "title": "Ear Nose & Throat",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "eastern_european",
        "title": "Eastern European",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "FR",
            "DK",
            "NO",
            "AU"
        ]
    },
    {
        "alias": "easterngerman",
        "title": "Eastern German",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "easternmexican",
        "title": "Eastern Mexican",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "eatertainment",
        "title": "Eatertainment",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "AT",
            "BE",
            "DE",
            "CH",
            "BR"
        ]
    },
    {
        "alias": "editorialservices",
        "title": "Editorial Services",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "NZ",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "IT",
            "AU",
            "AR",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "CL",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "MX",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "education",
        "title": "Education",
        "parents": []
    },
    {
        "alias": "educationservices",
        "title": "Educational Services",
        "parents": [
            "education"
        ],
        "country_blacklist": [
            "BR"
        ]
    },
    {
        "alias": "egyptian",
        "title": "Egyptian",
        "parents": [
            "mideastern"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "BE",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "eldercareplanning",
        "title": "Elder Care Planning",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "elderlaw",
        "title": "Elder Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "US",
            "PL",
            "TR",
            "AT",
            "DE",
            "CH",
            "PT",
            "BR"
        ]
    },
    {
        "alias": "electricians",
        "title": "Electricians",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "electricitysuppliers",
        "title": "Electricity Suppliers",
        "parents": [
            "utilities"
        ]
    },
    {
        "alias": "electronics",
        "title": "Electronics",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "electronicsrepair",
        "title": "Electronics Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "elementaryschools",
        "title": "Elementary Schools",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "elevatorservices",
        "title": "Elevator Services",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "JP",
            "MY",
            "PH",
            "CL",
            "FR",
            "MX",
            "FI"
        ]
    },
    {
        "alias": "eltern_cafes",
        "title": "Parent Cafes",
        "parents": [
            "food",
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "embassy",
        "title": "Embassy",
        "parents": [
            "publicservicesgovt"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "embroideryandcrochet",
        "title": "Embroidery & Crochet",
        "parents": [
            "artsandcrafts"
        ]
    },
    {
        "alias": "emergencymedicine",
        "title": "Emergency Medicine",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "emergencypethospital",
        "title": "Emergency Pet Hospital",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "emergencyrooms",
        "title": "Emergency Rooms",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "emilian",
        "title": "Emilian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "empanadas",
        "title": "Empanadas",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "ES",
            "AR",
            "CL",
            "US"
        ]
    },
    {
        "alias": "employmentagencies",
        "title": "Employment Agencies",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "employmentlawyers",
        "title": "Employment Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "emstraining",
        "title": "EMS Training",
        "parents": [
            "fitness"
        ],
        "country_whitelist": [
            "SE",
            "AT",
            "DE",
            "CH",
            "ES"
        ]
    },
    {
        "alias": "endocrinologists",
        "title": "Endocrinologists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "SE",
            "PL",
            "GB",
            "IE",
            "SG",
            "TW",
            "FI",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "endodontists",
        "title": "Endodontists",
        "parents": [
            "dentists"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "engraving",
        "title": "Engraving",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "entertainmentlaw",
        "title": "Entertainment Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "enviroabatement",
        "title": "Environmental Abatement",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "environmentaltesting",
        "title": "Environmental Testing",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "BE",
            "DK",
            "GB",
            "IE",
            "NO",
            "SG",
            "NL",
            "FI",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "eritrean",
        "title": "Eritrean",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US",
            "AT",
            "IT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "eroticmassage",
        "title": "Erotic Massage",
        "parents": [
            "beautysvc"
        ],
        "country_blacklist": [
            "JP",
            "SE",
            "US",
            "MY",
            "TR",
            "DK",
            "PH",
            "CL",
            "NO",
            "TW",
            "FI",
            "HK"
        ]
    },
    {
        "alias": "escapegames",
        "title": "Escape Games",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "estateliquidation",
        "title": "Estate Liquidation",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "estatephotography",
        "title": "Real Estate Photography",
        "parents": [
            "realestatesvcs"
        ],
        "country_blacklist": [
            "JP",
            "IT"
        ]
    },
    {
        "alias": "estateplanning",
        "title": "Estate Planning Law",
        "parents": [
            "lawyers"
        ],
        "country_blacklist": [
            "SE",
            "NO"
        ]
    },
    {
        "alias": "estheticians",
        "title": "Estheticians",
        "parents": [
            "skincare"
        ]
    },
    {
        "alias": "ethicgrocery",
        "title": "Ethical Grocery",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "US",
            "MY",
            "TR",
            "AT",
            "BE",
            "PH",
            "DE",
            "CH",
            "FR",
            "NL"
        ]
    },
    {
        "alias": "ethiopian",
        "title": "Ethiopian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "TR",
            "SG",
            "MX"
        ]
    },
    {
        "alias": "evchargingstations",
        "title": "EV Charging Stations",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "eventphotography",
        "title": "Event Photography",
        "parents": [
            "photographers"
        ]
    },
    {
        "alias": "eventplanning",
        "title": "Party & Event Planning",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "eventservices",
        "title": "Event Planning & Services",
        "parents": []
    },
    {
        "alias": "excavationservices",
        "title": "Excavation Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "experiences",
        "title": "Experiences",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "DE",
            "SE",
            "PT",
            "DK",
            "NO"
        ]
    },
    {
        "alias": "eyebrowservices",
        "title": "Eyebrow Services",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "eyelashservice",
        "title": "Eyelash Service",
        "parents": [
            "beautysvc"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "fabricstores",
        "title": "Fabric Stores",
        "parents": [
            "artsandcrafts"
        ]
    },
    {
        "alias": "facepainting",
        "title": "Face Painting",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "JP",
            "SE",
            "PL",
            "TW",
            "HK",
            "IT",
            "AR",
            "MY",
            "TR",
            "PH",
            "CL",
            "SG",
            "FR",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "fado_houses",
        "title": "Fado Houses",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "faithbasedcpc",
        "title": "Faith-based Crisis Pregnancy Centers",
        "parents": [
            "crisispregnancycenters"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "falafel",
        "title": "Falafel",
        "parents": [
            "mediterranean"
        ],
        "country_blacklist": [
            "MX",
            "PT",
            "AR"
        ]
    },
    {
        "alias": "familydr",
        "title": "Family Practice",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "BR"
        ]
    },
    {
        "alias": "farmequipmentrepair",
        "title": "Farm Equipment Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "farmersmarket",
        "title": "Farmers Market",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "farmingequipment",
        "title": "Farming Equipment",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "farms",
        "title": "Farms",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "farriers",
        "title": "Farriers",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "fashion",
        "title": "Fashion",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "fasil",
        "title": "Fasil Music",
        "parents": [
            "nightlife"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "fencesgates",
        "title": "Fences & Gates",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "fencing",
        "title": "Fencing Clubs",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "fengshui",
        "title": "Feng Shui",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "ferries",
        "title": "Ferries",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "fertility",
        "title": "Fertility",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "festivals",
        "title": "Festivals",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "filipino",
        "title": "Filipino",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "TR",
            "DK"
        ]
    },
    {
        "alias": "financialadvising",
        "title": "Financial Advising",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "financialservices",
        "title": "Financial Services",
        "parents": []
    },
    {
        "alias": "fingerprinting",
        "title": "Fingerprinting",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "firearmtraining",
        "title": "Firearm Training",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "firedepartments",
        "title": "Fire Departments",
        "parents": [
            "publicservicesgovt"
        ],
        "country_blacklist": [
            "NZ",
            "IE",
            "GB",
            "CA",
            "SG"
        ]
    },
    {
        "alias": "fireplace",
        "title": "Fireplace Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "fireprotection",
        "title": "Fire Protection Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "firewood",
        "title": "Firewood",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "MY",
            "TR",
            "BE",
            "PH",
            "TW",
            "NL",
            "HK"
        ]
    },
    {
        "alias": "fireworks",
        "title": "Fireworks",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "AR",
            "US",
            "GB",
            "CL",
            "MX",
            "PT",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "firstaidclasses",
        "title": "First Aid Classes",
        "parents": [
            "specialtyschools"
        ],
        "country_blacklist": [
            "NZ",
            "FR",
            "NL",
            "BE",
            "SG",
            "IE",
            "BR"
        ]
    },
    {
        "alias": "fischbroetchen",
        "title": "Fischbroetchen",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "fishing",
        "title": "Fishing",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "fishmonger",
        "title": "Fishmonger",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "FI",
            "PT",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "fishnchips",
        "title": "Fish & Chips",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "BR",
            "PT"
        ]
    },
    {
        "alias": "fitness",
        "title": "Fitness & Instruction",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "fitnessequipment",
        "title": "Fitness/Exercise Equipment",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "flatbread",
        "title": "Flatbread",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "PL",
            "AT",
            "DK",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "fleamarkets",
        "title": "Flea Markets",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "flemish",
        "title": "Flemish",
        "parents": [
            "belgian"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "flightinstruction",
        "title": "Flight Instruction",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "floatspa",
        "title": "Float Spa",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "IT"
        ]
    },
    {
        "alias": "flooring",
        "title": "Flooring",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "floraldesigners",
        "title": "Floral Designers",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "florists",
        "title": "Florists",
        "parents": [
            "flowers"
        ]
    },
    {
        "alias": "flowers",
        "title": "Flowers & Gifts",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "flyboarding",
        "title": "Flyboarding",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "fondue",
        "title": "Fondue",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "DK",
            "ES"
        ]
    },
    {
        "alias": "food",
        "title": "Food",
        "parents": []
    },
    {
        "alias": "food_court",
        "title": "Food Court",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TW",
            "FI",
            "TR",
            "FR"
        ]
    },
    {
        "alias": "foodbanks",
        "title": "Food Banks",
        "parents": [
            "nonprofit"
        ]
    },
    {
        "alias": "fooddeliveryservices",
        "title": "Food Delivery Services",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "foodsafety",
        "title": "Food Safety Training",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "SG",
            "BR",
            "PT",
            "US"
        ]
    },
    {
        "alias": "foodstands",
        "title": "Food Stands",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "foodtours",
        "title": "Food Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "foodtrucks",
        "title": "Food Trucks",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "football",
        "title": "Soccer",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "footcare",
        "title": "Foot Care",
        "parents": [
            "beautysvc"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "MY",
            "AT",
            "BE",
            "GB",
            "IE",
            "PH",
            "DE",
            "CH",
            "SG",
            "NL",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "forestry",
        "title": "Forestry",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "FI",
            "DK",
            "CA",
            "NO"
        ]
    },
    {
        "alias": "formalwear",
        "title": "Formal Wear",
        "parents": [
            "fashion"
        ],
        "country_blacklist": [
            "JP",
            "SE",
            "MY",
            "TR",
            "PH",
            "CH",
            "TW",
            "FI",
            "HK",
            "IT"
        ]
    },
    {
        "alias": "foundationrepair",
        "title": "Foundation Repair",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "framing",
        "title": "Framing",
        "parents": [
            "artsandcrafts"
        ]
    },
    {
        "alias": "franconian",
        "title": "Franconian",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "freediving",
        "title": "Free Diving",
        "parents": [
            "diving"
        ]
    },
    {
        "alias": "freiduria",
        "title": "Freiduria",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "MX",
            "ES",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "french",
        "title": "French",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "friterie",
        "title": "Friterie",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "FR",
            "NL",
            "PL",
            "BE",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "friulan",
        "title": "Friulan",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "frozenfood",
        "title": "Frozen Food",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "FR",
            "BE",
            "GB",
            "IT",
            "SG",
            "ES"
        ]
    },
    {
        "alias": "fueldocks",
        "title": "Fuel Docks",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "SE",
            "MX",
            "US",
            "DK",
            "NO",
            "ES"
        ]
    },
    {
        "alias": "funeralservices",
        "title": "Funeral Services & Cemeteries",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "funfair",
        "title": "Fun Fair",
        "parents": [
            "festivals"
        ],
        "country_whitelist": [
            "CZ",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "PT"
        ]
    },
    {
        "alias": "furclothing",
        "title": "Fur Clothing",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "furniture",
        "title": "Furniture Stores",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "furnitureassembly",
        "title": "Furniture Assembly",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "furniturerepair",
        "title": "Furniture Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "fuzhou",
        "title": "Fuzhou",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "TW",
            "SG",
            "MY",
            "HK"
        ]
    },
    {
        "alias": "galician",
        "title": "Galician",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "PT",
            "ES"
        ]
    },
    {
        "alias": "galleries",
        "title": "Art Galleries",
        "parents": [
            "arts",
            "shopping"
        ]
    },
    {
        "alias": "gamemeat",
        "title": "Game Meat",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AR",
            "JP",
            "MY",
            "TR",
            "PH",
            "CL",
            "TW",
            "MX",
            "FI",
            "PT",
            "HK",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "gametruckrental",
        "title": "Game Truck Rental",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "MX",
            "CA",
            "CL"
        ]
    },
    {
        "alias": "garage_door_services",
        "title": "Garage Door Services",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "AR",
            "JP",
            "SE",
            "MY",
            "PL",
            "AT",
            "PH",
            "CL",
            "DE",
            "CH",
            "TW",
            "HK"
        ]
    },
    {
        "alias": "gardeners",
        "title": "Gardeners",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "gardening",
        "title": "Nurseries & Gardening",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "gardens",
        "title": "Botanical Gardens",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "gastroenterologist",
        "title": "Gastroenterologist",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "gastropubs",
        "title": "Gastropubs",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "gaybars",
        "title": "Gay Bars",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "gelato",
        "title": "Gelato",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "US",
            "PL",
            "DK",
            "PH",
            "NO",
            "SG",
            "PT",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "gemstonesandminerals",
        "title": "Gemstones & Minerals",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "general_litigation",
        "title": "General Litigation",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "generaldentistry",
        "title": "General Dentistry",
        "parents": [
            "dentists"
        ]
    },
    {
        "alias": "generalfestivals",
        "title": "General Festivals",
        "parents": [
            "festivals"
        ],
        "country_whitelist": [
            "JP",
            "PT",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "generatorinstallrepair",
        "title": "Generator Installation/Repair",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "geneticists",
        "title": "Geneticists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "georgian",
        "title": "Georgian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "AT",
            "GB",
            "DE",
            "CH",
            "FI"
        ]
    },
    {
        "alias": "german",
        "title": "German",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "gerontologist",
        "title": "Gerontologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "gestorias",
        "title": "Gestorias",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "MX",
            "ES",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "giblets",
        "title": "Giblets",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "giftshops",
        "title": "Gift Shops",
        "parents": [
            "flowers"
        ],
        "country_blacklist": [
            "TR",
            "SG",
            "PL"
        ]
    },
    {
        "alias": "glassandmirrors",
        "title": "Glass & Mirrors",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "glassblowing",
        "title": "Glass Blowing",
        "parents": [
            "artclasses"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "gliding",
        "title": "Gliding",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "PL",
            "AT",
            "NO",
            "DE",
            "CH",
            "FR",
            "PT"
        ]
    },
    {
        "alias": "gluhwein",
        "title": "Mulled Wine",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "gluten_free",
        "title": "Gluten-Free",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "gokarts",
        "title": "Go Karts",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "goldbuyers",
        "title": "Gold Buyers",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "AT",
            "BE",
            "DE",
            "CH",
            "FR",
            "NL",
            "PT",
            "CA",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "golf",
        "title": "Golf",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "golfcartdealers",
        "title": "Golf Cart Dealers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "golfcartrentals",
        "title": "Golf Cart Rentals",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "golfequipment",
        "title": "Golf Equipment",
        "parents": [
            "sportgoods"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "BE",
            "CA",
            "DE",
            "AU"
        ]
    },
    {
        "alias": "golflessons",
        "title": "Golf Lessons",
        "parents": [
            "fitness"
        ],
        "country_blacklist": [
            "MY",
            "TR",
            "AT",
            "IE",
            "PH",
            "DE",
            "CH",
            "SG",
            "TW",
            "FI",
            "HK",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "gourmet",
        "title": "Specialty Food",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "gozleme",
        "title": "Gozleme",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "graphicdesign",
        "title": "Graphic Design",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "greek",
        "title": "Greek",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "grillingequipment",
        "title": "Grilling Equipment",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "grillservices",
        "title": "Grill Services",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "PL",
            "AT",
            "CL",
            "DE",
            "CH",
            "MX",
            "PT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "grocery",
        "title": "Grocery",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "groomer",
        "title": "Pet Groomers",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "groutservices",
        "title": "Grout Services",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "guamanian",
        "title": "Guamanian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "AR",
            "MX",
            "PL",
            "TR",
            "CL"
        ]
    },
    {
        "alias": "guesthouses",
        "title": "Guest Houses",
        "parents": [
            "hotelstravel"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "guitarstores",
        "title": "Guitar Stores",
        "parents": [
            "musicinstrumentservices"
        ]
    },
    {
        "alias": "gun_ranges",
        "title": "Gun/Rifle Ranges",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "CH",
            "SG",
            "AT",
            "BE"
        ]
    },
    {
        "alias": "guns_and_ammo",
        "title": "Guns & Ammo",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "MY",
            "PL",
            "AT",
            "PH",
            "CL",
            "DE",
            "CH",
            "MX",
            "PT",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "gunsmith",
        "title": "Gunsmith",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "JP",
            "TR",
            "AT",
            "BE",
            "DE",
            "CH",
            "TW",
            "NL",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "gutterservices",
        "title": "Gutter Services",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "MX",
            "AR"
        ]
    },
    {
        "alias": "gymnastics",
        "title": "Gymnastics",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "DK",
            "NO",
            "MX",
            "PT",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "gyms",
        "title": "Gyms",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "gyudon",
        "title": "Gyudon",
        "parents": [
            "donburi"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "habilitativeservices",
        "title": "Habilitative Services",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "hainan",
        "title": "Hainan",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "HK",
            "PH",
            "SG"
        ]
    },
    {
        "alias": "hair",
        "title": "Hair Salons",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "hair_extensions",
        "title": "Hair Extensions",
        "parents": [
            "hair",
            "beautysvc"
        ],
        "country_blacklist": [
            "NL",
            "TR",
            "PL",
            "HK",
            "BE"
        ]
    },
    {
        "alias": "hairloss",
        "title": "Hair Loss Centers",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "hairremoval",
        "title": "Hair Removal",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "hairstylists",
        "title": "Hair Stylists",
        "parents": [
            "hair"
        ],
        "country_whitelist": [
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "TW",
            "NL",
            "PT",
            "HK",
            "CA",
            "AU",
            "CZ",
            "AR",
            "US",
            "DK",
            "IE",
            "CL",
            "NO",
            "CH",
            "DE",
            "SG",
            "MX",
            "ES"
        ]
    },
    {
        "alias": "haitian",
        "title": "Haitian",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "hakka",
        "title": "Hakka",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "MY",
            "HK",
            "PH",
            "CA",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "halal",
        "title": "Halal",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR",
            "PT"
        ]
    },
    {
        "alias": "halfwayhouses",
        "title": "Halfway Houses",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "halotherapy",
        "title": "Halotherapy",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "handball",
        "title": "Handball",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "GB",
            "TW",
            "PT",
            "HK",
            "CA",
            "AU",
            "CZ",
            "US",
            "MY",
            "TR",
            "IE",
            "PH",
            "DE",
            "SG",
            "MX"
        ]
    },
    {
        "alias": "handrolls",
        "title": "Hand Rolls",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "BR",
            "TW"
        ]
    },
    {
        "alias": "handyman",
        "title": "Handyman",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "hanggliding",
        "title": "Hang Gliding",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "CZ",
            "MY",
            "PL",
            "TR",
            "DK",
            "GB",
            "IE",
            "PH",
            "DE",
            "SG",
            "TW",
            "NL",
            "FI",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "hardware",
        "title": "Hardware Stores",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "hats",
        "title": "Hats",
        "parents": [
            "fashion"
        ],
        "country_blacklist": [
            "JP",
            "SE",
            "PL",
            "TR",
            "AT",
            "IE",
            "GB",
            "CH",
            "HK"
        ]
    },
    {
        "alias": "hauntedhouses",
        "title": "Haunted Houses",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "hawaiian",
        "title": "Hawaiian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "PT",
            "TR",
            "DK",
            "AU"
        ]
    },
    {
        "alias": "hawkercentre",
        "title": "Hawker Centre",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "AR",
            "MY",
            "PH",
            "CL",
            "SG",
            "TW",
            "MX",
            "HK"
        ]
    },
    {
        "alias": "hazardouswastedisposal",
        "title": "Hazardous Waste Disposal",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "SE",
            "MY",
            "TR",
            "AT",
            "PH",
            "DE",
            "CH",
            "FR",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "headshops",
        "title": "Head Shops",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "health",
        "title": "Health & Medical",
        "parents": []
    },
    {
        "alias": "healthcoach",
        "title": "Health Coach",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "healthinsurance",
        "title": "Health Insurance Offices",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "PL",
            "AT",
            "BE",
            "DE",
            "CH",
            "SG",
            "FR",
            "MX",
            "PT",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "healthmarkets",
        "title": "Health Markets",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "healthretreats",
        "title": "Health Retreats",
        "parents": [
            "hotelstravel"
        ],
        "country_blacklist": [
            "MX",
            "AR"
        ]
    },
    {
        "alias": "healthtrainers",
        "title": "Trainers",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "hearing_aids",
        "title": "Hearing Aids",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "PL",
            "AT",
            "DK",
            "CL",
            "NO",
            "DE",
            "CH",
            "FR",
            "MX",
            "FI",
            "PT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "hearingaidproviders",
        "title": "Hearing Aid Providers",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "JP",
            "SE",
            "TR",
            "AT",
            "CL",
            "DE",
            "CH",
            "MX",
            "HK",
            "ES"
        ]
    },
    {
        "alias": "henghwa",
        "title": "Henghwa",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "TW",
            "SG",
            "MY",
            "HK"
        ]
    },
    {
        "alias": "hennaartists",
        "title": "Henna Artists",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "AT",
            "DK",
            "DE",
            "NO",
            "CH",
            "FR",
            "CA",
            "IT",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "hepatologists",
        "title": "Hepatologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "herbalshops",
        "title": "Herbal Shops",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "herbsandspices",
        "title": "Herbs & Spices",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "hessian",
        "title": "Hessian",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "heuriger",
        "title": "Heuriger",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AT"
        ]
    },
    {
        "alias": "hifi",
        "title": "High Fidelity Audio Equipment",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "highschools",
        "title": "Middle Schools & High Schools",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "hiking",
        "title": "Hiking",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "himalayan",
        "title": "Himalayan/Nepalese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "hindu_temples",
        "title": "Hindu Temples",
        "parents": [
            "religiousorgs"
        ]
    },
    {
        "alias": "historicaltours",
        "title": "Historical Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "hkcafe",
        "title": "Hong Kong Style Cafe",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TW",
            "CA",
            "HK",
            "US"
        ]
    },
    {
        "alias": "hobbyshops",
        "title": "Hobby Shops",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "hockeyequipment",
        "title": "Hockey Equipment",
        "parents": [
            "sportgoods"
        ]
    },
    {
        "alias": "hokkien",
        "title": "Hokkien",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "TW",
            "SG",
            "MY",
            "HK"
        ]
    },
    {
        "alias": "holidaydecorations",
        "title": "Holiday Decorations",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "home_inspectors",
        "title": "Home Inspectors",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "home_organization",
        "title": "Home Organization",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "homeandgarden",
        "title": "Home & Garden",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "homeappliancerepair",
        "title": "Appliances & Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "homeautomation",
        "title": "Home Automation",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "homecleaning",
        "title": "Home Cleaning",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "homedecor",
        "title": "Home Decor",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "homedevelopers",
        "title": "Home Developers",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "AR",
            "MX",
            "IT",
            "CL",
            "BR"
        ]
    },
    {
        "alias": "homeenergyauditors",
        "title": "Home Energy Auditors",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "homehealthcare",
        "title": "Home Health Care",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "homeinsurance",
        "title": "Home & Rental Insurance",
        "parents": [
            "insurance"
        ]
    },
    {
        "alias": "homelessshelters",
        "title": "Homeless Shelters",
        "parents": [
            "nonprofit"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "homemadefood",
        "title": "Homemade Food",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "homenetworkinstall",
        "title": "Home Network Installation",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "US",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "FI",
            "PT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "homeopathic",
        "title": "Homeopathic",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "NZ",
            "US",
            "TR",
            "GB",
            "IE",
            "SG",
            "TW",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "homeownerassociation",
        "title": "Homeowner Association",
        "parents": [
            "realestate"
        ],
        "country_whitelist": [
            "CZ",
            "PL",
            "US"
        ]
    },
    {
        "alias": "homeservices",
        "title": "Home Services",
        "parents": []
    },
    {
        "alias": "homestaging",
        "title": "Home Staging",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "CZ",
            "FR",
            "PT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "hometheatreinstallation",
        "title": "Home Theatre Installation",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "CZ",
            "DK"
        ]
    },
    {
        "alias": "homewindowtinting",
        "title": "Home Window Tinting",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "BE",
            "IE",
            "GB",
            "SG",
            "NL",
            "PT",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "honduran",
        "title": "Honduran",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR",
            "JP"
        ]
    },
    {
        "alias": "honey",
        "title": "Honey",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "PL",
            "TR",
            "DE",
            "FR",
            "FI",
            "IT"
        ]
    },
    {
        "alias": "hookah_bars",
        "title": "Hookah Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "SG",
            "AU"
        ]
    },
    {
        "alias": "horse_boarding",
        "title": "Horse Boarding",
        "parents": [
            "pets"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "SE",
            "US",
            "DK",
            "GB",
            "IE",
            "NO",
            "DE",
            "FR",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "horsebackriding",
        "title": "Horseback Riding",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "horsequipment",
        "title": "Horse Equipment Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "MY",
            "TR",
            "PH",
            "CH",
            "TW",
            "HK"
        ]
    },
    {
        "alias": "horseracing",
        "title": "Horse Racing",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "MY",
            "GB",
            "IE",
            "PH",
            "SG",
            "FR",
            "CA",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "horumon",
        "title": "Horumon",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "hospice",
        "title": "Hospice",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "hospitalists",
        "title": "Hospitalists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "JP",
            "TR",
            "AT",
            "IT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "hospitals",
        "title": "Hospitals",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "hostels",
        "title": "Hostels",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "hot_air_balloons",
        "title": "Hot Air Balloons",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "SG",
            "BR",
            "CA"
        ]
    },
    {
        "alias": "hotdog",
        "title": "Hot Dogs",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "hotdogs",
        "title": "Fast Food",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "hotel_bar",
        "title": "Hotel bar",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "SE",
            "FI",
            "PT",
            "DK",
            "NO",
            "BR"
        ]
    },
    {
        "alias": "hotels",
        "title": "Hotels",
        "parents": [
            "hotelstravel",
            "eventservices"
        ]
    },
    {
        "alias": "hotelstravel",
        "title": "Hotels & Travel",
        "parents": []
    },
    {
        "alias": "hotpot",
        "title": "Hot Pot",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "JP",
            "SE",
            "US",
            "MY",
            "PH",
            "SG",
            "TW",
            "FR",
            "HK",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "hotsprings",
        "title": "Hot Springs",
        "parents": [
            "beautysvc"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "JP",
            "US",
            "AT",
            "DE",
            "CH",
            "TW",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "hottubandpool",
        "title": "Hot Tub & Pool",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "housesitters",
        "title": "House Sitters",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "US",
            "PL",
            "AT",
            "DE",
            "CH",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "housingcooperatives",
        "title": "Housing Cooperatives",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "IT",
            "MX",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "hunan",
        "title": "Hunan",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "FR",
            "MY",
            "HK",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "hungarian",
        "title": "Hungarian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "huntingfishingsupplies",
        "title": "Hunting & Fishing Supplies",
        "parents": [
            "sportgoods"
        ]
    },
    {
        "alias": "hvac",
        "title": "Heating & Air Conditioning/HVAC",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "hybridcarrepair",
        "title": "Hybrid Car Repair",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "SE",
            "US",
            "PL",
            "IE",
            "GB",
            "SG",
            "AU"
        ]
    },
    {
        "alias": "hydrojetting",
        "title": "Hydro-jetting",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "CZ",
            "US"
        ]
    },
    {
        "alias": "hydroponics",
        "title": "Hydroponics",
        "parents": [
            "gardening"
        ]
    },
    {
        "alias": "hydrotherapy",
        "title": "Hydrotherapy",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "hypnosis",
        "title": "Hypnosis/Hypnotherapy",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "TR",
            "NL",
            "HK"
        ]
    },
    {
        "alias": "iberian",
        "title": "Iberian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "PT",
            "CA",
            "US"
        ]
    },
    {
        "alias": "icecream",
        "title": "Ice Cream & Frozen Yogurt",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "icedelivery",
        "title": "Ice Delivery",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "immigrationlawyers",
        "title": "Immigration Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "immunodermatologists",
        "title": "Immunodermatologists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "FR",
            "JP"
        ]
    },
    {
        "alias": "importedfood",
        "title": "Imported Food",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "indonesian",
        "title": "Indonesian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "ES"
        ]
    },
    {
        "alias": "indoor_playcenter",
        "title": "Indoor Playcentre",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "AR",
            "MY",
            "PL",
            "AT",
            "TR",
            "IE",
            "PH",
            "CL",
            "CH",
            "SG",
            "TW",
            "MX",
            "FI",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "indoorlandscaping",
        "title": "Indoor Landscaping",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "indpak",
        "title": "Indian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "infectiousdisease",
        "title": "Infectious Disease Specialists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "installmentloans",
        "title": "Installment Loans",
        "parents": [
            "financialservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "insulationinstallation",
        "title": "Insulation Installation",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "insurance",
        "title": "Insurance",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "interiordesign",
        "title": "Interior Design",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "interlocksystems",
        "title": "Interlock Systems",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "internalmed",
        "title": "Internal Medicine",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "BR"
        ]
    },
    {
        "alias": "international",
        "title": "International",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "US",
            "FI",
            "TR",
            "MY",
            "PH",
            "IT"
        ]
    },
    {
        "alias": "internetbooth",
        "title": "Internet Booths & Calling Centers",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "AR",
            "MX",
            "IT",
            "CL",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "internetcafe",
        "title": "Internet Cafes",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "intervaltraininggyms",
        "title": "Interval Training Gyms",
        "parents": [
            "gyms"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "intlgrocery",
        "title": "International Grocery",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "investing",
        "title": "Investing",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "iplaw",
        "title": "IP & Internet Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "CZ",
            "US"
        ]
    },
    {
        "alias": "irish",
        "title": "Irish",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "irish_pubs",
        "title": "Irish Pub",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "irrigation",
        "title": "Irrigation",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "island_pub",
        "title": "Island Pub",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE"
        ]
    },
    {
        "alias": "isps",
        "title": "Internet Service Providers",
        "parents": [
            "homeservices",
            "professional"
        ]
    },
    {
        "alias": "israeli",
        "title": "Israeli",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "CZ",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "italian",
        "title": "Italian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "itservices",
        "title": "IT Services & Computer Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "ivhydration",
        "title": "IV Hydration",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "izakaya",
        "title": "Izakaya",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "US",
            "SG",
            "TW",
            "MX",
            "HK",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "jailsandprisons",
        "title": "Jails & Prisons",
        "parents": [
            "publicservicesgovt"
        ]
    },
    {
        "alias": "jaliscan",
        "title": "Jaliscan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "japacurry",
        "title": "Japanese Curry",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP",
            "US",
            "HK",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "japanese",
        "title": "Japanese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "jazzandblues",
        "title": "Jazz & Blues",
        "parents": [
            "nightlife",
            "arts"
        ]
    },
    {
        "alias": "jetskis",
        "title": "Jet Skis",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "jewelry",
        "title": "Jewelry",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "jewelryrepair",
        "title": "Jewelry Repair",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "NZ",
            "SE",
            "AT",
            "GB",
            "IE",
            "DE",
            "CH",
            "SG",
            "TW",
            "FI",
            "HK"
        ]
    },
    {
        "alias": "jewish",
        "title": "Jewish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "PL",
            "IT",
            "DE"
        ]
    },
    {
        "alias": "jpsweets",
        "title": "Japanese Sweets",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "juicebars",
        "title": "Juice Bars & Smoothies",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "junkremovalandhauling",
        "title": "Junk Removal & Hauling",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "junkyards",
        "title": "Junkyards",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "AU",
            "CZ",
            "US",
            "DK",
            "IE",
            "DE",
            "NO",
            "SG",
            "FR",
            "BR"
        ]
    },
    {
        "alias": "kaiseki",
        "title": "Kaiseki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "karaoke",
        "title": "Karaoke",
        "parents": [
            "nightlife"
        ]
    },
    {
        "alias": "karaokerental",
        "title": "Karaoke Rental",
        "parents": [
            "partyequipmentrentals"
        ]
    },
    {
        "alias": "karate",
        "title": "Karate",
        "parents": [
            "martialarts"
        ]
    },
    {
        "alias": "kebab",
        "title": "Kebab",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "kickboxing",
        "title": "Kickboxing",
        "parents": [
            "martialarts"
        ]
    },
    {
        "alias": "kids_activities",
        "title": "Kids Activities",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "kidshairsalons",
        "title": "Kids Hair Salons",
        "parents": [
            "hair"
        ]
    },
    {
        "alias": "kimonos",
        "title": "Kimonos",
        "parents": [
            "fashion"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "kiosk",
        "title": "Kiosk",
        "parents": [
            "food",
            "shopping"
        ],
        "country_blacklist": [
            "NZ",
            "US",
            "GB",
            "IE",
            "SG",
            "FR",
            "HK",
            "CA",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "kitchenandbath",
        "title": "Kitchen & Bath",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "kitchenincubators",
        "title": "Kitchen Incubators",
        "parents": [
            "realestate"
        ],
        "country_whitelist": [
            "GB",
            "US"
        ]
    },
    {
        "alias": "kitchensupplies",
        "title": "Kitchen Supplies",
        "parents": [
            "kitchenandbath"
        ]
    },
    {
        "alias": "kiteboarding",
        "title": "Kiteboarding",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "CZ",
            "IT",
            "HK"
        ]
    },
    {
        "alias": "knifesharpening",
        "title": "Knife Sharpening",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "knittingsupplies",
        "title": "Knitting Supplies",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "kombucha",
        "title": "Kombucha",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "kopitiam",
        "title": "Kopitiam",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SG",
            "MY"
        ]
    },
    {
        "alias": "korean",
        "title": "Korean",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "kosher",
        "title": "Kosher",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR",
            "PT"
        ]
    },
    {
        "alias": "kurdish",
        "title": "Kurdish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE",
            "NO"
        ]
    },
    {
        "alias": "kushikatsu",
        "title": "Kushikatsu",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "laboratorytesting",
        "title": "Laboratory Testing",
        "parents": [
            "diagnosticservices"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "PL",
            "BE",
            "CL",
            "FR",
            "MX",
            "PT",
            "AU",
            "CA",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "lactationservices",
        "title": "Lactation Services",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "PT",
            "BE",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "lahmacun",
        "title": "Lahmacun",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "lakes",
        "title": "Lakes",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "lancenters",
        "title": "LAN Centers",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "PH",
            "MY",
            "IT"
        ]
    },
    {
        "alias": "landmarks",
        "title": "Landmarks & Historical Buildings",
        "parents": [
            "publicservicesgovt"
        ]
    },
    {
        "alias": "landscapearchitects",
        "title": "Landscape Architects",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "landscaping",
        "title": "Landscaping",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "landsurveying",
        "title": "Land Surveying",
        "parents": [
            "realestatesvcs"
        ],
        "country_blacklist": [
            "JP"
        ]
    },
    {
        "alias": "language_schools",
        "title": "Language Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "laos",
        "title": "Laos",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "laotian",
        "title": "Laotian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "laser_hair_removal",
        "title": "Laser Hair Removal",
        "parents": [
            "hairremoval"
        ]
    },
    {
        "alias": "laserlasikeyes",
        "title": "Laser Eye Surgery/Lasik",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "lasertag",
        "title": "Laser Tag",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "IE",
            "BR"
        ]
    },
    {
        "alias": "latin",
        "title": "Latin American",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "laundromat",
        "title": "Laundromat",
        "parents": [
            "laundryservices"
        ]
    },
    {
        "alias": "laundryservices",
        "title": "Laundry Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "lawn_bowling",
        "title": "Lawn Bowling",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "FI",
            "PT",
            "NO",
            "AU"
        ]
    },
    {
        "alias": "lawnservices",
        "title": "Lawn Services",
        "parents": [
            "landscaping"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "BE",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "lawyers",
        "title": "Lawyers",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "leather",
        "title": "Leather Goods",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "lebanese",
        "title": "Lebanese",
        "parents": [
            "mideastern"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "HK"
        ]
    },
    {
        "alias": "legalservices",
        "title": "Legal Services",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "AR",
            "SE",
            "MY",
            "AT",
            "GB",
            "IE",
            "PH",
            "CL",
            "DE",
            "CH",
            "TW",
            "MX",
            "FI",
            "HK",
            "ES"
        ]
    },
    {
        "alias": "libraries",
        "title": "Libraries",
        "parents": [
            "publicservicesgovt"
        ]
    },
    {
        "alias": "liceservices",
        "title": "Lice Services",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "JP",
            "CL",
            "DE",
            "MX",
            "FI",
            "HK"
        ]
    },
    {
        "alias": "lifecoach",
        "title": "Life Coach",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "lifeinsurance",
        "title": "Life Insurance",
        "parents": [
            "insurance"
        ],
        "country_blacklist": [
            "MY",
            "AT",
            "PH",
            "DE",
            "CH",
            "TW",
            "FR",
            "FI",
            "PT",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "lighting",
        "title": "Lighting Fixtures & Equipment",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "lightingstores",
        "title": "Lighting Stores",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "ligurian",
        "title": "Ligurian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT"
        ]
    },
    {
        "alias": "limos",
        "title": "Limos",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "linens",
        "title": "Linens",
        "parents": [
            "homeandgarden"
        ],
        "country_whitelist": [
            "CZ",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "FR",
            "PT",
            "IT"
        ]
    },
    {
        "alias": "lingerie",
        "title": "Lingerie",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "livestocksupply",
        "title": "Livestock Feed & Supply",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "localfishstores",
        "title": "Local Fish Stores",
        "parents": [
            "petstore"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "IT",
            "AU",
            "CZ",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "ES"
        ]
    },
    {
        "alias": "localflavor",
        "title": "Local Flavor",
        "parents": []
    },
    {
        "alias": "localservices",
        "title": "Local Services",
        "parents": []
    },
    {
        "alias": "locksmiths",
        "title": "Keys & Locksmiths",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "lounges",
        "title": "Lounges",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "luggage",
        "title": "Luggage",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "luggagestorage",
        "title": "Luggage Storage",
        "parents": [
            "travelservices"
        ]
    },
    {
        "alias": "lumbard",
        "title": "Lumbard",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "lyonnais",
        "title": "Lyonnais",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "macarons",
        "title": "Macarons",
        "parents": [
            "gourmet"
        ],
        "country_blacklist": [
            "PH",
            "MY",
            "IT"
        ]
    },
    {
        "alias": "machinerental",
        "title": "Machine & Tool Rental",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "machineshops",
        "title": "Machine Shops",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "madeira",
        "title": "Madeira",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "magicians",
        "title": "Magicians",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "FI",
            "SG",
            "TR",
            "SE"
        ]
    },
    {
        "alias": "mags",
        "title": "Newspapers & Magazines",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "mahjong",
        "title": "Mah Jong Halls",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "JP",
            "HK"
        ]
    },
    {
        "alias": "mailboxcenters",
        "title": "Mailbox Centers",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "makerspaces",
        "title": "Makerspaces",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "makeupartists",
        "title": "Makeup Artists",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "malaysian",
        "title": "Malaysian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "PT",
            "TR",
            "ES"
        ]
    },
    {
        "alias": "mamak",
        "title": "Mamak",
        "parents": [
            "malaysian"
        ],
        "country_whitelist": [
            "AU",
            "MY"
        ]
    },
    {
        "alias": "marchingbands",
        "title": "Marching Bands",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "SE",
            "TR",
            "AT",
            "GB",
            "DE",
            "NO",
            "CH",
            "PT"
        ]
    },
    {
        "alias": "marinas",
        "title": "Marinas",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "IT",
            "AU",
            "AR",
            "US",
            "TR",
            "DK",
            "IE",
            "CL",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "MX",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "marketing",
        "title": "Marketing",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "markets",
        "title": "Fruits & Veggies",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "marketstalls",
        "title": "Market Stalls",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "CZ",
            "PL",
            "AT",
            "DK",
            "GB",
            "IE",
            "NO",
            "DE",
            "CH",
            "PT",
            "IT"
        ]
    },
    {
        "alias": "martialarts",
        "title": "Martial Arts",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "masonry_concrete",
        "title": "Masonry/Concrete",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "NZ",
            "NL",
            "BE",
            "SG",
            "IE",
            "GB",
            "BR"
        ]
    },
    {
        "alias": "massage",
        "title": "Massage",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "massage_schools",
        "title": "Massage Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "massage_therapy",
        "title": "Massage Therapy",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "TW",
            "HK",
            "CZ",
            "MY",
            "TR",
            "IE",
            "PH",
            "DE",
            "CH",
            "SG",
            "FR",
            "FI"
        ]
    },
    {
        "alias": "massmedia",
        "title": "Mass Media",
        "parents": []
    },
    {
        "alias": "matchmakers",
        "title": "Matchmakers",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "AR",
            "JP",
            "US",
            "PL",
            "DK",
            "CL",
            "NO",
            "DE",
            "CH",
            "FR",
            "MX",
            "PT",
            "AU",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "materialeelettrico",
        "title": "Materiale elettrico",
        "parents": [
            "homeandgarden"
        ],
        "country_whitelist": [
            "AR",
            "MX",
            "IT",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "maternity",
        "title": "Maternity Wear",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "mattresses",
        "title": "Mattresses",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "mauritius",
        "title": "Mauritius",
        "parents": [
            "french"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "PL",
            "TR",
            "AT",
            "DK",
            "CL",
            "NO",
            "DE",
            "CH",
            "MX",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "meaderies",
        "title": "Meaderies",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "PL",
            "AT",
            "CL",
            "DE",
            "CH",
            "MX",
            "ES"
        ]
    },
    {
        "alias": "meatballs",
        "title": "Meatballs",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NL",
            "TR",
            "FR",
            "BE"
        ]
    },
    {
        "alias": "meats",
        "title": "Meat Shops",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "medcenters",
        "title": "Medical Centers",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "media",
        "title": "Books, Mags, Music & Video",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "mediators",
        "title": "Mediators",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "AT",
            "BE",
            "IE",
            "GB",
            "DE",
            "CH",
            "SG",
            "NL",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "medicalfoot",
        "title": "Medical Foot Care",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "JP",
            "PL",
            "AT",
            "PT",
            "IT",
            "CZ",
            "AR",
            "US",
            "MY",
            "TR",
            "PH",
            "CL",
            "MX",
            "FI",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "medicallaw",
        "title": "Medical Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "medicalspa",
        "title": "Medical Spas",
        "parents": [
            "health",
            "beautysvc"
        ]
    },
    {
        "alias": "medicalsupplies",
        "title": "Medical Supplies",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "medicaltransportation",
        "title": "Medical Transportation",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "NL",
            "PT",
            "IT",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "meditationcenters",
        "title": "Meditation Centers",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "mediterranean",
        "title": "Mediterranean",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "memorycare",
        "title": "Memory Care",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "menscloth",
        "title": "Men's Clothing",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "menshair",
        "title": "Men's Hair Salons",
        "parents": [
            "hair"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "BE",
            "DK",
            "CL",
            "NO",
            "NL",
            "MX",
            "PT",
            "AU",
            "ES"
        ]
    },
    {
        "alias": "metaldetectorservices",
        "title": "Metal Detector Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "metalfabricators",
        "title": "Metal Fabricators",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "MX",
            "AR",
            "SE"
        ]
    },
    {
        "alias": "metrostations",
        "title": "Metro Stations",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "mexican",
        "title": "Mexican",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "mideastern",
        "title": "Middle Eastern",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "BR"
        ]
    },
    {
        "alias": "midwives",
        "title": "Midwives",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "militarysurplus",
        "title": "Military Surplus",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "milkbars",
        "title": "Milk Bars",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "PL",
            "AU"
        ]
    },
    {
        "alias": "milkshakebars",
        "title": "Milkshake Bars",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "GB"
        ]
    },
    {
        "alias": "minho",
        "title": "Minho",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "mini_golf",
        "title": "Mini Golf",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "mistingsystemservices",
        "title": "Misting System Services",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "mobile_home_repair",
        "title": "Mobile Home Repair",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "SE",
            "BE",
            "CA"
        ]
    },
    {
        "alias": "mobiledentrepair",
        "title": "Mobile Dent Repair",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "mobilehomes",
        "title": "Mobile Home Dealers",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "mobileparks",
        "title": "Mobile Home Parks",
        "parents": [
            "realestate"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "mobilephonerepair",
        "title": "Mobile Phone Repair",
        "parents": [
            "itservices"
        ]
    },
    {
        "alias": "mobilephones",
        "title": "Mobile Phones",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "mobilityequipment",
        "title": "Mobility Equipment Sales & Services",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "modern_australian",
        "title": "Modern Australian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "modern_european",
        "title": "Modern European",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "mohels",
        "title": "Mohels",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "mongolian",
        "title": "Mongolian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "TR",
            "ES",
            "PT"
        ]
    },
    {
        "alias": "montessori",
        "title": "Montessori Schools",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "moroccan",
        "title": "Moroccan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "mortgagebrokers",
        "title": "Mortgage Brokers",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "DK",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "mortgagelenders",
        "title": "Mortgage Lenders",
        "parents": [
            "financialservices"
        ],
        "country_blacklist": [
            "FR",
            "TR",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "mortuaryservices",
        "title": "Mortuary Services",
        "parents": [
            "funeralservices"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "mosques",
        "title": "Mosques",
        "parents": [
            "religiousorgs"
        ]
    },
    {
        "alias": "motodealers",
        "title": "Motorsport Vehicle Dealers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "US",
            "SE",
            "IT",
            "ES",
            "TW"
        ]
    },
    {
        "alias": "motorcycle_rental",
        "title": "Motorcycle Rental",
        "parents": [
            "hotelstravel"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "DE",
            "NO",
            "SG",
            "FR",
            "MX",
            "FI",
            "PT",
            "AU",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "motorcycledealers",
        "title": "Motorcycle Dealers",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "motorcyclepartsandsupplies",
        "title": "Motorcycle Parts & Supplies",
        "parents": [
            "autopartssupplies"
        ]
    },
    {
        "alias": "motorcyclerepair",
        "title": "Motorcycle Repair",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "motorcyclinggear",
        "title": "Motorcycle Gear",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "NZ",
            "IE",
            "GB",
            "CA"
        ]
    },
    {
        "alias": "motorepairs",
        "title": "Motorsport Vehicle Repairs",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "US",
            "SE",
            "IT",
            "ES",
            "TW"
        ]
    },
    {
        "alias": "mountainbiking",
        "title": "Mountain Biking",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "mountainhuts",
        "title": "Mountain Huts",
        "parents": [
            "hotels"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "AR",
            "SE",
            "US",
            "PL",
            "AT",
            "CL",
            "NO",
            "DE",
            "CH",
            "FR",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "movers",
        "title": "Movers",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "movietheaters",
        "title": "Cinema",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "muaythai",
        "title": "Muay Thai",
        "parents": [
            "martialarts"
        ]
    },
    {
        "alias": "municipality",
        "title": "Municipality",
        "parents": [
            "publicservicesgovt"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "museums",
        "title": "Museums",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "musicalinstrumentsandteachers",
        "title": "Musical Instruments & Teachers",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "musicians",
        "title": "Musicians",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "musicinstrumentservices",
        "title": "Musical Instrument Services",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "musicproduction",
        "title": "Music Production Services",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "musicvenues",
        "title": "Music Venues",
        "parents": [
            "nightlife",
            "arts"
        ]
    },
    {
        "alias": "musicvideo",
        "title": "Music & DVDs",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "mystics",
        "title": "Mystics",
        "parents": [
            "psychic_astrology"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "nailtechnicians",
        "title": "Nail Technicians",
        "parents": [
            "othersalons"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "TR",
            "AT",
            "DE",
            "CH",
            "BR"
        ]
    },
    {
        "alias": "nannys",
        "title": "Nanny Services",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "FI",
            "SE"
        ]
    },
    {
        "alias": "napoletana",
        "title": "Napoletana",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "CZ",
            "FR",
            "IT"
        ]
    },
    {
        "alias": "nasilemak",
        "title": "Nasi Lemak",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "SG",
            "MY"
        ]
    },
    {
        "alias": "naturalgassuppliers",
        "title": "Natural Gas Suppliers",
        "parents": [
            "utilities"
        ]
    },
    {
        "alias": "naturopathic",
        "title": "Naturopathic/Holistic",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "nephrologists",
        "title": "Nephrologists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "neurologist",
        "title": "Neurologist",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "neuropathologists",
        "title": "Neuropathologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "neurotologists",
        "title": "Neurotologists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "JP"
        ]
    },
    {
        "alias": "newamerican",
        "title": "American (New)",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "DK",
            "IE",
            "GB",
            "NO"
        ]
    },
    {
        "alias": "newcanadian",
        "title": "Canadian (New)",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CA"
        ]
    },
    {
        "alias": "newmexican",
        "title": "New Mexican Cuisine",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "newzealand",
        "title": "New Zealand",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NZ"
        ]
    },
    {
        "alias": "nicaraguan",
        "title": "Nicaraguan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AR",
            "CL"
        ]
    },
    {
        "alias": "nicois",
        "title": "Nicoise",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "nightfood",
        "title": "Night Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE",
            "TR",
            "PL",
            "DK",
            "NO"
        ]
    },
    {
        "alias": "nightlife",
        "title": "Nightlife",
        "parents": []
    },
    {
        "alias": "nikkei",
        "title": "Nikkei",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AR",
            "MX",
            "CL",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "nonprofit",
        "title": "Community Service/Non-Profit",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "noodles",
        "title": "Noodles",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CH",
            "FR",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "norcinerie",
        "title": "Norcinerie",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "northeasternbrazilian",
        "title": "Northeastern Brazilian",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "northernbrazilian",
        "title": "Northern Brazilian",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "northerngerman",
        "title": "Northern German",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "northernmexican",
        "title": "Northern Mexican",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "norwegian",
        "title": "Traditional Norwegian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "NO"
        ]
    },
    {
        "alias": "notaries",
        "title": "Notaries",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "NO"
        ]
    },
    {
        "alias": "nudist",
        "title": "Nudist",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "AU",
            "CZ",
            "US",
            "DK",
            "IE",
            "DE",
            "NO",
            "CH",
            "FR",
            "FI",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "nursepractitioner",
        "title": "Nurse Practitioner",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "nursingschools",
        "title": "Nursing Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "nutritionists",
        "title": "Nutritionists",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "nyonya",
        "title": "Nyonya",
        "parents": [
            "malaysian"
        ],
        "country_whitelist": [
            "AU",
            "MY"
        ]
    },
    {
        "alias": "oaxacan",
        "title": "Oaxacan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "obgyn",
        "title": "Obstetricians & Gynecologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "observatories",
        "title": "Observatories",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "occupationaltherapy",
        "title": "Occupational Therapy",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "SE",
            "PL",
            "AT",
            "TW",
            "HK",
            "IT",
            "CZ",
            "MY",
            "TR",
            "PH",
            "CH",
            "SG",
            "FR",
            "FI"
        ]
    },
    {
        "alias": "oden",
        "title": "Oden",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "officecleaning",
        "title": "Office Cleaning",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "officeequipment",
        "title": "Office Equipment",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "officiants",
        "title": "Officiants",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "oilchange",
        "title": "Oil Change Stations",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "CH",
            "SE",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "okinawan",
        "title": "Okinawan",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "okonomiyaki",
        "title": "Okonomiyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "oliveoil",
        "title": "Olive Oil",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "AT",
            "BE",
            "DE",
            "ES"
        ]
    },
    {
        "alias": "oncologist",
        "title": "Oncologist",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "onigiri",
        "title": "Onigiri",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "opensandwiches",
        "title": "Open Sandwiches",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "TR",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "opera",
        "title": "Opera & Ballet",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "opthamalogists",
        "title": "Ophthalmologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "opticians",
        "title": "Eyewear & Opticians",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "optometrists",
        "title": "Optometrists",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "oralsurgeons",
        "title": "Oral Surgeons",
        "parents": [
            "dentists"
        ]
    },
    {
        "alias": "organdonorservices",
        "title": "Organ & Tissue Donor Services",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "organic_stores",
        "title": "Organic Stores",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "oriental",
        "title": "Oriental",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "PT",
            "PL",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "orthodontists",
        "title": "Orthodontists",
        "parents": [
            "dentists"
        ]
    },
    {
        "alias": "orthopedists",
        "title": "Orthopedists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "orthotics",
        "title": "Orthotics",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "DK",
            "GB",
            "IE",
            "NO",
            "SG",
            "FR",
            "FI",
            "AU",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "osteopathicphysicians",
        "title": "Osteopathic Physicians",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "osteopaths",
        "title": "Osteopaths",
        "parents": [
            "medcenters"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "othersalons",
        "title": "Nail Salons",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "otologists",
        "title": "Otologists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "CH",
            "FR",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "ottomancuisine",
        "title": "Ottoman Cuisine",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "outdoorfurniture",
        "title": "Outdoor Furniture Stores",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "outdoorgear",
        "title": "Outdoor Gear",
        "parents": [
            "sportgoods"
        ]
    },
    {
        "alias": "outdoormovies",
        "title": "Outdoor Movies",
        "parents": [
            "movietheaters"
        ],
        "country_blacklist": [
            "PL"
        ]
    },
    {
        "alias": "outdoorpowerequipmentservices",
        "title": "Outdoor Power Equipment Services",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "PL",
            "AT",
            "DK",
            "PH",
            "NO",
            "DE",
            "CH",
            "PT",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "outlet_stores",
        "title": "Outlet Stores",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "oxygenbars",
        "title": "Oxygen Bars",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "oyakodon",
        "title": "Oyakodon",
        "parents": [
            "donburi"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "pachinko",
        "title": "Pachinko",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "packingservices",
        "title": "Packing Services",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "MY",
            "PL",
            "BE",
            "PH",
            "SG",
            "TW",
            "FR",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "packingsupplies",
        "title": "Packing Supplies",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "AU",
            "CZ",
            "US",
            "DK",
            "IE",
            "DE",
            "NO",
            "CH",
            "SG",
            "FR",
            "BR"
        ]
    },
    {
        "alias": "paddleboarding",
        "title": "Paddleboarding",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "JP",
            "SE",
            "MY",
            "TR",
            "PH",
            "TW",
            "HK",
            "IT"
        ]
    },
    {
        "alias": "painmanagement",
        "title": "Pain Management",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "paintandsip",
        "title": "Paint & Sip",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "HK",
            "US"
        ]
    },
    {
        "alias": "paintball",
        "title": "Paintball",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "painters",
        "title": "Painters",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "paintstores",
        "title": "Paint Stores",
        "parents": [
            "homeandgarden"
        ],
        "country_blacklist": [
            "FI",
            "MY",
            "PT",
            "TR",
            "HK",
            "PH",
            "TW"
        ]
    },
    {
        "alias": "paintyourownpottery",
        "title": "Paint-Your-Own Pottery",
        "parents": [
            "artsandcrafts"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "PH",
            "DE",
            "SG",
            "TW",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "pakistani",
        "title": "Pakistani",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "palatine",
        "title": "Palatine",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "panasian",
        "title": "Pan Asian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "pancakes",
        "title": "Pancakes",
        "parents": [
            "breakfast_brunch"
        ]
    },
    {
        "alias": "panzerotti",
        "title": "Panzerotti",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "paragliding",
        "title": "Paragliding",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "parasailing",
        "title": "Parasailing",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "parentingclasses",
        "title": "Parenting Classes",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "parking",
        "title": "Parking",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "parklets",
        "title": "Parklets",
        "parents": [
            "localflavor"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "parks",
        "title": "Parks",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "parma",
        "title": "Parma",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "partybikerentals",
        "title": "Party Bike Rentals",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "BE",
            "IE",
            "DE",
            "ES"
        ]
    },
    {
        "alias": "partybusrentals",
        "title": "Party Bus Rentals",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "MY",
            "PL",
            "IE",
            "PH",
            "TW",
            "FR",
            "MX",
            "PT",
            "HK",
            "CA",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "partycharacters",
        "title": "Party Characters",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "partyequipmentrentals",
        "title": "Party Equipment Rentals",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "FI",
            "TW",
            "HK"
        ]
    },
    {
        "alias": "partysupplies",
        "title": "Party Supplies",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "passportvisaservices",
        "title": "Passport & Visa Services",
        "parents": [
            "travelservices"
        ]
    },
    {
        "alias": "pastashops",
        "title": "Pasta Shops",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "AR",
            "JP",
            "US",
            "BE",
            "DK",
            "GB",
            "IE",
            "CL",
            "NO",
            "SG",
            "NL",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "patentlaw",
        "title": "Patent Law",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "pathologists",
        "title": "Pathologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "patiocoverings",
        "title": "Patio Coverings",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NL",
            "US",
            "PT",
            "BE",
            "CA",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "pawn",
        "title": "Pawn Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "BR",
            "TR"
        ]
    },
    {
        "alias": "paydayloans",
        "title": "Check Cashing/Pay-day Loans",
        "parents": [
            "financialservices"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "AT",
            "DK",
            "DE",
            "CH",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "payroll",
        "title": "Payroll Services",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "TR",
            "BE",
            "GB",
            "IE",
            "SG",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "pediatric_dentists",
        "title": "Pediatric Dentists",
        "parents": [
            "dentists"
        ]
    },
    {
        "alias": "pediatricians",
        "title": "Pediatricians",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "pedicabs",
        "title": "Pedicabs",
        "parents": [
            "transport"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "MY",
            "AT",
            "DK",
            "PH",
            "NO",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "pekinese",
        "title": "Pekinese",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "FR",
            "JP",
            "MY",
            "HK",
            "IT",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "pensions",
        "title": "Pensions",
        "parents": [
            "hotels"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "SE",
            "AT",
            "DK",
            "NO",
            "DE",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "perfume",
        "title": "Perfume",
        "parents": [
            "shopping",
            "beautysvc"
        ],
        "country_blacklist": [
            "FI",
            "PL",
            "TR",
            "CA",
            "SG"
        ]
    },
    {
        "alias": "periodontists",
        "title": "Periodontists",
        "parents": [
            "dentists"
        ]
    },
    {
        "alias": "permanentmakeup",
        "title": "Permanent Makeup",
        "parents": [
            "beautysvc"
        ],
        "country_blacklist": [
            "NZ",
            "FI",
            "SG"
        ]
    },
    {
        "alias": "persian",
        "title": "Persian/Iranian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "personal_injury",
        "title": "Personal Injury Law",
        "parents": [
            "lawyers"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "personal_shopping",
        "title": "Personal Shopping",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "MX",
            "CL",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "personalassistants",
        "title": "Personal Assistants",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "CZ",
            "PT",
            "US"
        ]
    },
    {
        "alias": "personalcare",
        "title": "Personal Care Services",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "BE",
            "DK",
            "NO",
            "FR",
            "NL",
            "FI",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "personalchefs",
        "title": "Personal Chefs",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "peruvian",
        "title": "Peruvian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR",
            "SG",
            "PT"
        ]
    },
    {
        "alias": "pest_control",
        "title": "Pest Control",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "pet_sitting",
        "title": "Pet Sitting",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "pet_training",
        "title": "Pet Training",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "petadoption",
        "title": "Pet Adoption",
        "parents": [
            "pets"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "petboarding",
        "title": "Pet Boarding",
        "parents": [
            "pet_sitting"
        ]
    },
    {
        "alias": "petbreeders",
        "title": "Pet Breeders",
        "parents": [
            "petservices"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "MY",
            "TR",
            "IE",
            "PH",
            "CL",
            "SG",
            "TW",
            "MX",
            "FI",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "petcremation",
        "title": "Pet Cremation Services",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "pethospice",
        "title": "Pet Hospice",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "petinsurance",
        "title": "Pet Insurance",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "petphotography",
        "title": "Pet Photography",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "pets",
        "title": "Pets",
        "parents": []
    },
    {
        "alias": "petservices",
        "title": "Pet Services",
        "parents": [
            "pets"
        ]
    },
    {
        "alias": "petstore",
        "title": "Pet Stores",
        "parents": [
            "pets"
        ]
    },
    {
        "alias": "pettingzoos",
        "title": "Petting Zoos",
        "parents": [
            "zoos"
        ],
        "country_whitelist": [
            "US",
            "AT",
            "BE",
            "DK",
            "GB",
            "NO",
            "DE",
            "CH",
            "NL",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "pettransport",
        "title": "Pet Transportation",
        "parents": [
            "petservices"
        ],
        "country_whitelist": [
            "US",
            "SE"
        ]
    },
    {
        "alias": "petwasteremoval",
        "title": "Pet Waste Removal",
        "parents": [
            "petservices"
        ]
    },
    {
        "alias": "pfcomercial",
        "title": "PF/Comercial",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "pharmacy",
        "title": "Pharmacy",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "phlebologists",
        "title": "Phlebologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "photoboothrentals",
        "title": "Photo Booth Rentals",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "FI",
            "JP",
            "HK"
        ]
    },
    {
        "alias": "photoclasses",
        "title": "Photography Classes",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "photographers",
        "title": "Photographers",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "photographystores",
        "title": "Photography Stores & Services",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "physicaltherapy",
        "title": "Physical Therapy",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "physicians",
        "title": "Doctors",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "piadina",
        "title": "Piadina",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "IT",
            "US"
        ]
    },
    {
        "alias": "pianobars",
        "title": "Piano Bars",
        "parents": [
            "nightlife"
        ],
        "country_blacklist": [
            "NZ",
            "PL",
            "AT",
            "IE",
            "CH",
            "SG",
            "FI",
            "AU",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "pianoservices",
        "title": "Piano Services",
        "parents": [
            "musicinstrumentservices"
        ]
    },
    {
        "alias": "pianostores",
        "title": "Piano Stores",
        "parents": [
            "musicinstrumentservices"
        ]
    },
    {
        "alias": "pickleball",
        "title": "Pickleball",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "US",
            "PL",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "pickyourown",
        "title": "Pick Your Own Farms",
        "parents": [
            "farms"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "US",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "FR"
        ]
    },
    {
        "alias": "piemonte",
        "title": "Piemonte",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT"
        ]
    },
    {
        "alias": "piercing",
        "title": "Piercing",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "pierogis",
        "title": "Pierogis",
        "parents": [
            "polish"
        ],
        "country_whitelist": [
            "PL"
        ]
    },
    {
        "alias": "pilates",
        "title": "Pilates",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "pita",
        "title": "Pita",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "pizza",
        "title": "Pizza",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "placentaencapsulation",
        "title": "Placenta Encapsulations",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "CZ",
            "FR",
            "PL",
            "TR",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "planetarium",
        "title": "Planetarium",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "plasticsurgeons",
        "title": "Plastic Surgeons",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "MX",
            "ES",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "playgrounds",
        "title": "Playgrounds",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "playsets",
        "title": "Playsets",
        "parents": [
            "homeandgarden"
        ]
    },
    {
        "alias": "plumbing",
        "title": "Plumbing",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "plus_size_fashion",
        "title": "Plus Size Fashion",
        "parents": [
            "fashion"
        ],
        "country_blacklist": [
            "AR",
            "JP",
            "PL",
            "TR",
            "GB",
            "IE",
            "CL",
            "SG",
            "MX",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "podiatrists",
        "title": "Podiatrists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "poke",
        "title": "Poke",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            false,
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "DE",
            "CH",
            "SG",
            "FR",
            "BR"
        ]
    },
    {
        "alias": "poledancingclasses",
        "title": "Pole Dancing Classes",
        "parents": [
            "specialtyschools"
        ],
        "country_blacklist": [
            "AR",
            "PL",
            "TR",
            "AT",
            "BE",
            "GB",
            "IE",
            "CL",
            "CH",
            "MX",
            "PT",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "policedepartments",
        "title": "Police Departments",
        "parents": [
            "publicservicesgovt"
        ]
    },
    {
        "alias": "polish",
        "title": "Polish",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "SG"
        ]
    },
    {
        "alias": "polynesian",
        "title": "Polynesian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "poolbilliards",
        "title": "Pool & Billiards",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "SE",
            "PL",
            "AT",
            "CL",
            "NO",
            "DE",
            "CH",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "poolcleaners",
        "title": "Pool Cleaners",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "DK",
            "NO"
        ]
    },
    {
        "alias": "poolhalls",
        "title": "Pool Halls",
        "parents": [
            "nightlife"
        ]
    },
    {
        "alias": "poolservice",
        "title": "Pool & Hot Tub Service",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "popcorn",
        "title": "Popcorn Shops",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "GB",
            "JP",
            "US"
        ]
    },
    {
        "alias": "popuprestaurants",
        "title": "Pop-Up Restaurants",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "BE",
            "GB",
            "TW",
            "NL",
            "HK",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "DE",
            "NO",
            "SG",
            "FR"
        ]
    },
    {
        "alias": "popupshops",
        "title": "Pop-up Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "PT"
        ]
    },
    {
        "alias": "portabletoiletservices",
        "title": "Portable Toilet Services",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "CZ",
            "AR",
            "JP",
            "MY",
            "PH",
            "CL",
            "TW",
            "FR",
            "MX",
            "FI",
            "HK"
        ]
    },
    {
        "alias": "portuguese",
        "title": "Portuguese",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "postoffices",
        "title": "Post Offices",
        "parents": [
            "publicservicesgovt"
        ]
    },
    {
        "alias": "postpartumcare",
        "title": "Postpartum Care",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "JP",
            "PL",
            "MY",
            "HK",
            "TW"
        ]
    },
    {
        "alias": "potatoes",
        "title": "Potatoes",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AU",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "poutineries",
        "title": "Poutineries",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "powdercoating",
        "title": "Powder Coating",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "prenatal",
        "title": "Prenatal/Perinatal Care",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "JP",
            "MY",
            "PL",
            "AT",
            "TR",
            "GB",
            "IE",
            "PH",
            "DE",
            "CH",
            "SG",
            "TW",
            "HK",
            "CA"
        ]
    },
    {
        "alias": "preschools",
        "title": "Preschools",
        "parents": [
            "education"
        ],
        "country_blacklist": [
            "DK"
        ]
    },
    {
        "alias": "pressurewashers",
        "title": "Pressure Washers",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "pretzels",
        "title": "Pretzels",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CH",
            "PT",
            "US",
            "DE"
        ]
    },
    {
        "alias": "preventivemedicine",
        "title": "Preventive Medicine",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "printmedia",
        "title": "Print Media",
        "parents": [
            "massmedia"
        ]
    },
    {
        "alias": "privateinvestigation",
        "title": "Private Investigation",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "privatejetcharter",
        "title": "Private Jet Charter",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "privateschools",
        "title": "Private Schools",
        "parents": [
            "education"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "AR",
            "SE",
            "US",
            "DK",
            "CL",
            "NO",
            "MX",
            "PT",
            "AU",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "privatetutors",
        "title": "Private Tutors",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "processservers",
        "title": "Process Servers",
        "parents": [
            "legalservices"
        ],
        "country_whitelist": [
            "FR",
            "BE",
            "US"
        ]
    },
    {
        "alias": "proctologist",
        "title": "Proctologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "productdesign",
        "title": "Product Design",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "US",
            "BE",
            "DK",
            "IE",
            "GB",
            "PH",
            "NO",
            "SG",
            "FR",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "professional",
        "title": "Professional Services",
        "parents": []
    },
    {
        "alias": "propane",
        "title": "Propane",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "CZ",
            "MX",
            "AR",
            "NZ"
        ]
    },
    {
        "alias": "propertymgmt",
        "title": "Property Management",
        "parents": [
            "realestate"
        ]
    },
    {
        "alias": "props",
        "title": "Props",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "BE",
            "US"
        ]
    },
    {
        "alias": "prosthetics",
        "title": "Prosthetics",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US",
            "AU",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "prosthodontists",
        "title": "Prosthodontists",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "ES",
            "IT",
            "US"
        ]
    },
    {
        "alias": "provencal",
        "title": "Provencal",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "psychiatrists",
        "title": "Psychiatrists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "psychic_astrology",
        "title": "Supernatural Readings",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "psychicmediums",
        "title": "Psychic Mediums",
        "parents": [
            "psychic_astrology"
        ],
        "country_blacklist": [
            "PL"
        ]
    },
    {
        "alias": "psychics",
        "title": "Psychics",
        "parents": [
            "psychic_astrology"
        ]
    },
    {
        "alias": "psychoanalysts",
        "title": "Psychoanalysts",
        "parents": [
            "c_and_mh"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "BE",
            "FR",
            "NL",
            "MX",
            "PT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "psychologists",
        "title": "Psychologists",
        "parents": [
            "c_and_mh"
        ],
        "country_blacklist": [
            "JP",
            "PL",
            "HK",
            "IE",
            "GB",
            "SG"
        ]
    },
    {
        "alias": "psychotechnicaltests",
        "title": "Psychotechnical Tests",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "BR",
            "ES"
        ]
    },
    {
        "alias": "psychotherapists",
        "title": "Psychotherapists",
        "parents": [
            "c_and_mh"
        ],
        "country_whitelist": [
            "CZ",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "FI",
            "BR"
        ]
    },
    {
        "alias": "pubfood",
        "title": "Pub Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "publicadjusters",
        "title": "Public Adjusters",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "publicart",
        "title": "Public Art",
        "parents": [
            "localflavor"
        ]
    },
    {
        "alias": "publicmarkets",
        "title": "Public Markets",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "publicplazas",
        "title": "Public Plazas",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "US",
            "BE",
            "GB",
            "IE",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "publicrelations",
        "title": "Public Relations",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "publicservicesgovt",
        "title": "Public Services & Government",
        "parents": []
    },
    {
        "alias": "publictransport",
        "title": "Public Transportation",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "pubs",
        "title": "Pubs",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "pueblan",
        "title": "Pueblan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "puertorican",
        "title": "Puerto Rican",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "pulmonologist",
        "title": "Pulmonologist",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "pulquerias",
        "title": "Pulquerias",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "pumpkinpatches",
        "title": "Pumpkin Patches",
        "parents": [
            "homeandgarden"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "qigong",
        "title": "Qi Gong",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "races",
        "title": "Races & Competitions",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "AR",
            "JP",
            "MY",
            "TR",
            "IE",
            "PH",
            "CL",
            "TW",
            "MX",
            "FI",
            "PT",
            "HK",
            "CA",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "racetracks",
        "title": "Race Tracks",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "AT",
            "SG",
            "IE",
            "DE",
            "CH",
            "BR"
        ]
    },
    {
        "alias": "racingexperience",
        "title": "Racing Experience",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "SE"
        ]
    },
    {
        "alias": "radiologists",
        "title": "Radiologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "radiostations",
        "title": "Radio Stations",
        "parents": [
            "massmedia"
        ]
    },
    {
        "alias": "rafting",
        "title": "Rafting/Kayaking",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "ramen",
        "title": "Ramen",
        "parents": [
            "japanese"
        ]
    },
    {
        "alias": "ranches",
        "title": "Ranches",
        "parents": [
            "farms"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "MX",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "raw_food",
        "title": "Live/Raw Food",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "realestate",
        "title": "Real Estate",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "realestateagents",
        "title": "Real Estate Agents",
        "parents": [
            "realestate"
        ]
    },
    {
        "alias": "realestatelawyers",
        "title": "Real Estate Law",
        "parents": [
            "lawyers"
        ]
    },
    {
        "alias": "realestatesvcs",
        "title": "Real Estate Services",
        "parents": [
            "realestate"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "record_labels",
        "title": "Record Labels",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "CZ",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "PT",
            "BR"
        ]
    },
    {
        "alias": "recording_studios",
        "title": "Recording & Rehearsal Studios",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "recreation",
        "title": "Recreation Centers",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "recyclingcenter",
        "title": "Recycling Center",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "refinishing",
        "title": "Refinishing Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "reflexology",
        "title": "Reflexology",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "FI",
            "TR",
            "PL",
            "SE"
        ]
    },
    {
        "alias": "registrationservices",
        "title": "Registration Services",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "AR",
            "MX",
            "DK",
            "CL",
            "NO",
            "ES"
        ]
    },
    {
        "alias": "registry_office",
        "title": "Registry Office",
        "parents": [
            "publicservicesgovt"
        ],
        "country_whitelist": [
            "CZ",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "FI",
            "PT",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "rehabilitation_center",
        "title": "Rehabilitation Center",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "MY",
            "TR",
            "AT",
            "PH",
            "CH",
            "SG",
            "TW",
            "FR",
            "HK"
        ]
    },
    {
        "alias": "reiki",
        "title": "Reiki",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "JP",
            "AR",
            "MX",
            "HK",
            "CL"
        ]
    },
    {
        "alias": "religiousitems",
        "title": "Religious Items",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "religiousorgs",
        "title": "Religious Organizations",
        "parents": []
    },
    {
        "alias": "religiousschools",
        "title": "Religious Schools",
        "parents": [
            "education"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "AR",
            "US",
            "MY",
            "DK",
            "PH",
            "CL",
            "NO",
            "MX",
            "PT",
            "AU",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "rentfurniture",
        "title": "Furniture Rental",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "AR",
            "JP",
            "US",
            "BE",
            "CL",
            "NL",
            "MX",
            "PT",
            "AU",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "reproductivehealthservices",
        "title": "Reproductive Health Services",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "reptileshops",
        "title": "Reptile Shops",
        "parents": [
            "petstore"
        ],
        "country_whitelist": [
            "JP",
            "SE",
            "US",
            "BE",
            "DK",
            "NO",
            "DE",
            "NL",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "residences",
        "title": "Residences",
        "parents": [
            "hotels"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "MY",
            "PL",
            "AT",
            "PH",
            "DE",
            "CH",
            "SG",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "resorts",
        "title": "Resorts",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "restaurants",
        "title": "Restaurants",
        "parents": []
    },
    {
        "alias": "reststops",
        "title": "Rest Stops",
        "parents": [
            "hotels"
        ]
    },
    {
        "alias": "retinaspecialists",
        "title": "Retina Specialists",
        "parents": [
            "opthamalogists"
        ],
        "country_blacklist": [
            "CH",
            "FR",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "retirement_homes",
        "title": "Retirement Homes",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "reunion",
        "title": "Reunion",
        "parents": [
            "french"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "PL",
            "TR",
            "AT",
            "DK",
            "CL",
            "NO",
            "DE",
            "CH",
            "MX",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "reupholstery",
        "title": "Furniture Reupholstery",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "rhematologists",
        "title": "Rheumatologists",
        "parents": [
            "physicians"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "PL",
            "TR",
            "GB",
            "IE",
            "SG",
            "TW",
            "FI",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "rhinelandian",
        "title": "Rhinelandian",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "ribatejo",
        "title": "Ribatejo",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "riceshop",
        "title": "Rice",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR",
            "JP"
        ]
    },
    {
        "alias": "roadsideassist",
        "title": "Roadside Assistance",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "NZ",
            "SE",
            "TR",
            "GB",
            "IE",
            "SG",
            "TW",
            "FR",
            "FI",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "robatayaki",
        "title": "Robatayaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP",
            "HK"
        ]
    },
    {
        "alias": "rock_climbing",
        "title": "Rock Climbing",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "rodeo",
        "title": "Rodeo",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "rodizios",
        "title": "Rodizios",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR",
            "PT",
            "AR"
        ]
    },
    {
        "alias": "roman",
        "title": "Roman",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "JP",
            "IT"
        ]
    },
    {
        "alias": "romanian",
        "title": "Romanian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "PL",
            "AT",
            "BE",
            "DE",
            "CH",
            "FR",
            "ES"
        ]
    },
    {
        "alias": "roofing",
        "title": "Roofing",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "roofinspectors",
        "title": "Roof Inspectors",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "rotisserie_chicken",
        "title": "Rotisserie Chicken",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NZ",
            "AR",
            "PL",
            "BE",
            "CL",
            "FR",
            "NL",
            "MX",
            "PT",
            "AU",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "rugs",
        "title": "Rugs",
        "parents": [
            "homeandgarden"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "PL",
            "AT",
            "IE",
            "DE",
            "CH",
            "HK"
        ]
    },
    {
        "alias": "russian",
        "title": "Russian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "rv_dealers",
        "title": "RV Dealers",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "MY",
            "TR",
            "GB",
            "IE",
            "PH",
            "CL",
            "SG",
            "TW",
            "MX",
            "PT",
            "HK",
            "AU"
        ]
    },
    {
        "alias": "rvparks",
        "title": "RV Parks",
        "parents": [
            "hotelstravel"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "IT",
            "AU",
            "CZ",
            "AR",
            "US",
            "TR",
            "DK",
            "IE",
            "CL",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "MX",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "rvrental",
        "title": "RV Rental",
        "parents": [
            "hotelstravel"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "rvrepair",
        "title": "RV Repair",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "DE",
            "NO",
            "CH",
            "SG",
            "BR"
        ]
    },
    {
        "alias": "ryokan",
        "title": "Ryokan",
        "parents": [
            "hotels"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "safestores",
        "title": "Safe Stores",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "safetyequipment",
        "title": "Safety Equipment",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "sailing",
        "title": "Sailing",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "sakebars",
        "title": "Sake Bars",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "salad",
        "title": "Salad",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "salumerie",
        "title": "Salumerie",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "AR",
            "MX",
            "PT",
            "IT",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "salvadoran",
        "title": "Salvadoran",
        "parents": [
            "latin"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "sambaschools",
        "title": "Samba Schools",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "FI",
            "BR",
            "IT",
            "SE"
        ]
    },
    {
        "alias": "sandblasting",
        "title": "Sandblasting",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US",
            "AT",
            "BE",
            "DE",
            "CH",
            "NL",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "sandwiches",
        "title": "Sandwiches",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "sardinian",
        "title": "Sardinian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT",
            "US"
        ]
    },
    {
        "alias": "saunainstallation",
        "title": "Sauna Installation & Repair",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "GB",
            "CA",
            "IT",
            "AU",
            "CZ",
            "US",
            "DK",
            "IE",
            "NO",
            "DE",
            "CH",
            "SG",
            "FI"
        ]
    },
    {
        "alias": "saunas",
        "title": "Saunas",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "NZ",
            "MY",
            "PL",
            "PH",
            "SG",
            "AU",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "scandinavian",
        "title": "Scandinavian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "PT"
        ]
    },
    {
        "alias": "scandinaviandesign",
        "title": "Scandinavian Design",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "DK",
            "FI",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "scavengerhunts",
        "title": "Scavenger Hunts",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "schnitzel",
        "title": "Schnitzel",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "PL",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "scooterrentals",
        "title": "Scooter Rentals",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "scootertours",
        "title": "Scooter Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "scottish",
        "title": "Scottish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US",
            "AT",
            "GB",
            "CA",
            "IE",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "screen_printing_tshirt_printing",
        "title": "Screen Printing/T-Shirt Printing",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "PL",
            "TR",
            "GB",
            "IE",
            "SG",
            "TW",
            "FI",
            "HK",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "screenprinting",
        "title": "Screen Printing",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "scuba",
        "title": "Scuba Diving",
        "parents": [
            "diving"
        ]
    },
    {
        "alias": "seafood",
        "title": "Seafood",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "seafoodmarkets",
        "title": "Seafood Markets",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "seasonaldecorservices",
        "title": "Holiday Decorating Services",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "JP",
            "TR",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "FR",
            "NL",
            "IT"
        ]
    },
    {
        "alias": "security",
        "title": "Security Services",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "NZ"
        ]
    },
    {
        "alias": "securitysystems",
        "title": "Security Systems",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "selfdefenseclasses",
        "title": "Self-defense Classes",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "selfstorage",
        "title": "Self Storage",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "senegalese",
        "title": "Senegalese",
        "parents": [
            "african"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "BE",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "seniorcenters",
        "title": "Senior Centers",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "septicservices",
        "title": "Septic Services",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US",
            "PL",
            "BE",
            "DK",
            "NO",
            "NL",
            "PT",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "serbocroatian",
        "title": "Serbo Croatian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "SE",
            "PL",
            "AT",
            "BE",
            "CL",
            "DE",
            "CH",
            "FR",
            "IT"
        ]
    },
    {
        "alias": "service_stations",
        "title": "Service Stations",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "SE",
            "MY",
            "TR",
            "DK",
            "PH",
            "NO",
            "TW",
            "FR",
            "FI",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "servicestations",
        "title": "Gas Stations",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "sessionphotography",
        "title": "Session Photography",
        "parents": [
            "photographers"
        ]
    },
    {
        "alias": "sewingalterations",
        "title": "Sewing & Alterations",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "sextherapists",
        "title": "Sex Therapists",
        "parents": [
            "c_and_mh"
        ]
    },
    {
        "alias": "shanghainese",
        "title": "Shanghainese",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "JP",
            "SE",
            "US",
            "MY",
            "BE",
            "SG",
            "TW",
            "FR",
            "HK",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "sharedofficespaces",
        "title": "Shared Office Spaces",
        "parents": [
            "realestate"
        ]
    },
    {
        "alias": "sharedtaxis",
        "title": "Shared Taxis",
        "parents": [
            "transport"
        ],
        "country_whitelist": [
            "SE",
            "TR",
            "DK",
            "PH",
            "NO",
            "BR"
        ]
    },
    {
        "alias": "shavedice",
        "title": "Shaved Ice",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CZ",
            "JP",
            "AR",
            "US",
            "CL",
            "SG",
            "TW",
            "MX",
            "IT"
        ]
    },
    {
        "alias": "shavedsnow",
        "title": "Shaved Snow",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "HK",
            "CA",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "shedsandoutdoorstorage",
        "title": "Sheds & Outdoor Storage",
        "parents": [
            "homeandgarden"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "SE",
            "TR",
            "DK",
            "NO",
            "TW",
            "FR",
            "FI",
            "HK",
            "ES"
        ]
    },
    {
        "alias": "shipping_centers",
        "title": "Shipping Centers",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "SE",
            "NO"
        ]
    },
    {
        "alias": "shoerepair",
        "title": "Shoe Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "shoes",
        "title": "Shoe Stores",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "shoeshine",
        "title": "Shoe Shine",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "NL",
            "BE"
        ]
    },
    {
        "alias": "shopping",
        "title": "Shopping",
        "parents": []
    },
    {
        "alias": "shoppingcenters",
        "title": "Shopping Centers",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "shoppingpassages",
        "title": "Shopping Passages",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "US"
        ]
    },
    {
        "alias": "shredding",
        "title": "Shredding Services",
        "parents": [
            "professional"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "AT",
            "BE",
            "GB",
            "IE",
            "DE",
            "CH",
            "SG",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "shrines",
        "title": "Shrines",
        "parents": [
            "religiousorgs"
        ],
        "country_whitelist": [
            "JP",
            "AR",
            "MX",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "shutters",
        "title": "Shutters",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "sicilian",
        "title": "Sicilian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "CZ",
            "FR",
            "US",
            "PL",
            "IT"
        ]
    },
    {
        "alias": "signature_cuisine",
        "title": "Signature Cuisine",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AR",
            "SE",
            "DK",
            "CL",
            "NO",
            "MX",
            "PT",
            "ES"
        ]
    },
    {
        "alias": "signmaking",
        "title": "Signmaking",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "sikhtemples",
        "title": "Sikh Temples",
        "parents": [
            "religiousorgs"
        ]
    },
    {
        "alias": "silentdisco",
        "title": "Silent Disco",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "JP"
        ]
    },
    {
        "alias": "singaporean",
        "title": "Singaporean",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "PT",
            "TR",
            "DK",
            "ES"
        ]
    },
    {
        "alias": "skate_parks",
        "title": "Skate Parks",
        "parents": [
            "parks"
        ]
    },
    {
        "alias": "skateshops",
        "title": "Skate Shops",
        "parents": [
            "sportgoods"
        ]
    },
    {
        "alias": "skatingrinks",
        "title": "Skating Rinks",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "skiing",
        "title": "Skiing",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "US",
            "MY",
            "PL",
            "TR",
            "GB",
            "IE",
            "PH",
            "SG",
            "TW",
            "FR",
            "MX",
            "HK",
            "IT",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "skillednursing",
        "title": "Skilled Nursing",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "skincare",
        "title": "Skin Care",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "skiresorts",
        "title": "Ski Resorts",
        "parents": [
            "hotelstravel"
        ],
        "country_blacklist": [
            "DK",
            "SG",
            "BR",
            "MX"
        ]
    },
    {
        "alias": "skischools",
        "title": "Ski Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "skishops",
        "title": "Ski & Snowboard Shops",
        "parents": [
            "sportgoods"
        ],
        "country_blacklist": [
            "MY",
            "TR",
            "DK",
            "PH",
            "SG",
            "TW",
            "MX",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "skydiving",
        "title": "Skydiving",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "sledding",
        "title": "Sledding",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "TR",
            "AT",
            "NO",
            "DE",
            "CH",
            "FI",
            "PT",
            "CA",
            "IT"
        ]
    },
    {
        "alias": "sleepspecialists",
        "title": "Sleep Specialists",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "sleepwear",
        "title": "Sleepwear",
        "parents": [
            "fashion"
        ],
        "country_whitelist": [
            "PT",
            "AU"
        ]
    },
    {
        "alias": "slovakian",
        "title": "Slovakian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "BE",
            "GB",
            "IE",
            "FR",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "smog_check_stations",
        "title": "Smog Check Stations",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "DK",
            "FI",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "smokehouse",
        "title": "Smokehouse",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FR",
            "AR",
            "MX",
            "PL",
            "TR",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "smokingareas",
        "title": "Smoking Areas",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "snorkeling",
        "title": "Snorkeling",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "snowremoval",
        "title": "Snow Removal",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "MX",
            "BR",
            "NZ",
            "HK"
        ]
    },
    {
        "alias": "snuggleservices",
        "title": "Snuggle Services",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "JP",
            "US"
        ]
    },
    {
        "alias": "soba",
        "title": "Soba",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "social_clubs",
        "title": "Social Clubs",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "socialsecuritylaw",
        "title": "Social Security Law",
        "parents": [
            "lawyers"
        ],
        "country_blacklist": [
            "CZ",
            "PL"
        ]
    },
    {
        "alias": "softwaredevelopment",
        "title": "Software Development",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "solarinstallation",
        "title": "Solar Installation",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "solarpanelcleaning",
        "title": "Solar Panel Cleaning",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "somali",
        "title": "Somali",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US",
            "PL",
            "AT",
            "IT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "sommelierservices",
        "title": "Sommelier Services",
        "parents": [
            "eventservices"
        ],
        "country_blacklist": [
            "FR"
        ]
    },
    {
        "alias": "sophrologists",
        "title": "Sophrologists",
        "parents": [
            "c_and_mh"
        ],
        "country_whitelist": [
            "CZ",
            "PL",
            "FR",
            "BE"
        ]
    },
    {
        "alias": "soulfood",
        "title": "Soul Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE",
            "US",
            "PL",
            "IE",
            "GB",
            "NO",
            "NL",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "soup",
        "title": "Soup",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "southafrican",
        "title": "South African",
        "parents": [
            "african"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "BE",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "southern",
        "title": "Southern",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "US",
            "PL",
            "TR",
            "IE",
            "GB",
            "NL",
            "CA"
        ]
    },
    {
        "alias": "souvenirs",
        "title": "Souvenir Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "SG",
            "CA"
        ]
    },
    {
        "alias": "spanish",
        "title": "Spanish",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "spas",
        "title": "Day Spas",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "speakeasies",
        "title": "Speakeasies",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "DK",
            "TR",
            "IT",
            "NO"
        ]
    },
    {
        "alias": "specialbikes",
        "title": "Special Bikes",
        "parents": [
            "bicycles"
        ],
        "country_whitelist": [
            "DK",
            "PT"
        ]
    },
    {
        "alias": "specialed",
        "title": "Special Education",
        "parents": [
            "education"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "specialtyschools",
        "title": "Specialty Schools",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "speech_therapists",
        "title": "Speech Therapists",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "speechtraining",
        "title": "Speech Training",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "spermclinic",
        "title": "Sperm Clinic",
        "parents": [
            "health"
        ],
        "country_whitelist": [
            "AR",
            "US",
            "BE",
            "DK",
            "CL",
            "NO",
            "DE",
            "FR",
            "NL",
            "MX",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "spinesurgeons",
        "title": "Spine Surgeons",
        "parents": [
            "physicians"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "spiritism",
        "title": "Spiritism",
        "parents": [
            "religiousorgs"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "spiritual_shop",
        "title": "Spiritual Shop",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "sport_equipment_hire",
        "title": "Sport Equipment Hire",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "DK",
            "CL",
            "NO",
            "MX",
            "PT",
            "AU",
            "ES"
        ]
    },
    {
        "alias": "sportgoods",
        "title": "Sporting Goods",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "sports_clubs",
        "title": "Sports Clubs",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "sportsbars",
        "title": "Sports Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "CH",
            "AT"
        ]
    },
    {
        "alias": "sportsbetting",
        "title": "Sports Betting",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "IT",
            "US"
        ]
    },
    {
        "alias": "sportsmed",
        "title": "Sports Medicine",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "sportspsychologists",
        "title": "Sports Psychologists",
        "parents": [
            "c_and_mh"
        ],
        "country_whitelist": [
            "NZ",
            "SG",
            "IT",
            "US"
        ]
    },
    {
        "alias": "sportsteams",
        "title": "Professional Sports Teams",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "sportswear",
        "title": "Sports Wear",
        "parents": [
            "fashion",
            "sportgoods"
        ]
    },
    {
        "alias": "spraytanning",
        "title": "Spray Tanning",
        "parents": [
            "tanning"
        ],
        "country_blacklist": [
            "SE",
            "PL",
            "IE",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "squash",
        "title": "Squash",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "SG",
            "BR",
            "PT"
        ]
    },
    {
        "alias": "srilankan",
        "title": "Sri Lankan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "stadiumsarenas",
        "title": "Stadiums & Arenas",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "stationery",
        "title": "Cards & Stationery",
        "parents": [
            "flowers",
            "artsandcrafts",
            "eventservices"
        ]
    },
    {
        "alias": "steak",
        "title": "Steakhouses",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "stereo_installation",
        "title": "Car Stereo Installation",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "CH",
            "DK",
            "AT"
        ]
    },
    {
        "alias": "stockings",
        "title": "Stockings",
        "parents": [
            "fashion"
        ],
        "country_whitelist": [
            "CZ",
            "NL",
            "PT",
            "AT",
            "BE",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "stonemasons",
        "title": "Stonemasons",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "streetart",
        "title": "Street Art",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "US",
            "MY",
            "TR",
            "AT",
            "GB",
            "IE",
            "CH",
            "SG",
            "FI",
            "CA"
        ]
    },
    {
        "alias": "streetvendors",
        "title": "Street Vendors",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "stripclubs",
        "title": "Strip Clubs",
        "parents": [
            "adultentertainment"
        ]
    },
    {
        "alias": "stripteasedancers",
        "title": "Striptease Dancers",
        "parents": [
            "adultentertainment"
        ]
    },
    {
        "alias": "structuralengineers",
        "title": "Structural Engineers",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "stucco",
        "title": "Stucco Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "studiotaping",
        "title": "Studio Taping",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "NL",
            "BE",
            "US"
        ]
    },
    {
        "alias": "sud_ouest",
        "title": "French Southwest",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "sugaring",
        "title": "Sugaring",
        "parents": [
            "hairremoval"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "AT",
            "DK",
            "NO",
            "DE",
            "CH",
            "FI"
        ]
    },
    {
        "alias": "sugarshacks",
        "title": "Sugar Shacks",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CA"
        ]
    },
    {
        "alias": "sukiyaki",
        "title": "Sukiyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "summer_camps",
        "title": "Summer Camps",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "sunglasses",
        "title": "Sunglasses",
        "parents": [
            "opticians"
        ]
    },
    {
        "alias": "supperclubs",
        "title": "Supper Clubs",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "GB",
            "CA",
            "US",
            "ES"
        ]
    },
    {
        "alias": "suppliesrestaurant",
        "title": "Restaurant Supplies",
        "parents": [
            "wholesalers"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "IT",
            "AU",
            "AR",
            "US",
            "DK",
            "IE",
            "CL",
            "NO",
            "DE",
            "CH",
            "SG",
            "MX",
            "ES"
        ]
    },
    {
        "alias": "surfing",
        "title": "Surfing",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "NZ",
            "AR",
            "JP",
            "SE",
            "US",
            "DK",
            "CL",
            "DE",
            "FR",
            "NL",
            "MX",
            "PT",
            "IT",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "surflifesaving",
        "title": "Surf Lifesaving",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "NZ",
            "AR",
            "CL",
            "MX",
            "PT",
            "AU",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "surfschools",
        "title": "Surf Schools",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "surfshop",
        "title": "Surf Shop",
        "parents": [
            "fashion"
        ],
        "country_blacklist": [
            "CZ",
            "SE",
            "BE",
            "IE",
            "NO",
            "SG",
            "FR",
            "NL",
            "FI",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "surgeons",
        "title": "Surgeons",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "sushi",
        "title": "Sushi Bars",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "swabian",
        "title": "Swabian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "swedish",
        "title": "Swedish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE"
        ]
    },
    {
        "alias": "swimminglessons",
        "title": "Swimming Lessons/Schools",
        "parents": [
            "specialtyschools",
            "fitness"
        ]
    },
    {
        "alias": "swimmingpools",
        "title": "Swimming Pools",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "swimwear",
        "title": "Swimwear",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "swissfood",
        "title": "Swiss Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "MX",
            "CL",
            "DE",
            "CH",
            "ES"
        ]
    },
    {
        "alias": "synagogues",
        "title": "Synagogues",
        "parents": [
            "religiousorgs"
        ]
    },
    {
        "alias": "syrian",
        "title": "Syrian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "szechuan",
        "title": "Szechuan",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "US",
            "MY",
            "IE",
            "GB",
            "SG",
            "TW",
            "FR",
            "HK",
            "AU"
        ]
    },
    {
        "alias": "tabac",
        "title": "Tabac",
        "parents": [
            "bars"
        ],
        "country_whitelist": [
            "CZ",
            "FR",
            "BE",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "tabernas",
        "title": "Tabernas",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "PT",
            "TR",
            "ES"
        ]
    },
    {
        "alias": "tablaoflamenco",
        "title": "Tablao Flamenco",
        "parents": [
            "arts"
        ],
        "country_whitelist": [
            "AR",
            "MX",
            "PT",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "tabletopgames",
        "title": "Tabletop Games",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "tableware",
        "title": "Tableware",
        "parents": [
            "homeandgarden"
        ],
        "country_whitelist": [
            "CZ",
            "AR",
            "US",
            "AT",
            "BE",
            "DK",
            "CL",
            "NO",
            "DE",
            "CH",
            "FR",
            "NL",
            "MX",
            "PT",
            "BR"
        ]
    },
    {
        "alias": "tacos",
        "title": "Tacos",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX",
            "US"
        ]
    },
    {
        "alias": "taekwondo",
        "title": "Taekwondo",
        "parents": [
            "martialarts"
        ]
    },
    {
        "alias": "taichi",
        "title": "Tai Chi",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "taiwanese",
        "title": "Taiwanese",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ",
            "FI",
            "TR",
            "PT",
            "ES"
        ]
    },
    {
        "alias": "taiyaki",
        "title": "Taiyaki",
        "parents": [
            "jpsweets"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "takoyaki",
        "title": "Takoyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "talentagencies",
        "title": "Talent Agencies",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "TR",
            "AT",
            "GB",
            "IE",
            "CH",
            "SG",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "tamales",
        "title": "Tamales",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "tanning",
        "title": "Tanning",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "tanningbeds",
        "title": "Tanning Beds",
        "parents": [
            "tanning"
        ],
        "country_blacklist": [
            "FI",
            "BR",
            "PL",
            "SE"
        ]
    },
    {
        "alias": "taoisttemples",
        "title": "Taoist Temples",
        "parents": [
            "religiousorgs"
        ],
        "country_whitelist": [
            "TW",
            "HK"
        ]
    },
    {
        "alias": "tapas",
        "title": "Tapas Bars",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "SG",
            "AU"
        ]
    },
    {
        "alias": "tapasmallplates",
        "title": "Tapas/Small Plates",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "tastingclasses",
        "title": "Tasting Classes",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "tattoo",
        "title": "Tattoo",
        "parents": [
            "beautysvc"
        ]
    },
    {
        "alias": "tattooremoval",
        "title": "Tattoo Removal",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "tavolacalda",
        "title": "Tavola Calda",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "taxidermy",
        "title": "Taxidermy",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "CZ",
            "NZ",
            "SE",
            "DK",
            "IE",
            "NO",
            "SG",
            "NL",
            "FI",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "taxis",
        "title": "Taxis",
        "parents": [
            "transport"
        ]
    },
    {
        "alias": "taxlaw",
        "title": "Tax Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "AT",
            "BE",
            "DE",
            "CH",
            "SG",
            "FR",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "taxoffice",
        "title": "Tax Office",
        "parents": [
            "publicservicesgovt"
        ],
        "country_blacklist": [
            "US",
            "PL",
            "CA",
            "SG",
            "ES"
        ]
    },
    {
        "alias": "taxservices",
        "title": "Tax Services",
        "parents": [
            "financialservices"
        ]
    },
    {
        "alias": "tcm",
        "title": "Traditional Chinese Medicine",
        "parents": [
            "health"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "tea",
        "title": "Tea Rooms",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "teachersupplies",
        "title": "Teacher Supplies",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "FR",
            "IT"
        ]
    },
    {
        "alias": "teambuilding",
        "title": "Team Building Activities",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "teethwhitening",
        "title": "Teeth Whitening",
        "parents": [
            "beautysvc"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "telecommunications",
        "title": "Telecommunications",
        "parents": [
            "itservices"
        ],
        "country_blacklist": [
            "MX",
            "JP",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "televisionserviceproviders",
        "title": "Television Service Providers",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "televisionstations",
        "title": "Television Stations",
        "parents": [
            "massmedia"
        ]
    },
    {
        "alias": "tempura",
        "title": "Tempura",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "tenantlaw",
        "title": "Tenant and Eviction Law",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "tennis",
        "title": "Tennis",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "teochew",
        "title": "Teochew",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "TW",
            "SG",
            "MY",
            "HK"
        ]
    },
    {
        "alias": "teppanyaki",
        "title": "Teppanyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "US",
            "SG",
            "TW",
            "MX",
            "HK",
            "AU"
        ]
    },
    {
        "alias": "testprep",
        "title": "Test Preparation",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "tex-mex",
        "title": "Tex-Mex",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK",
            "PT",
            "AU",
            "ES"
        ]
    },
    {
        "alias": "thai",
        "title": "Thai",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "theater",
        "title": "Performing Arts",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "themedcafes",
        "title": "Themed Cafes",
        "parents": [
            "cafes"
        ],
        "country_whitelist": [
            "NZ",
            "JP",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "TW",
            "NL",
            "HK",
            "CA",
            "AU",
            "AR",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "CL",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "MX",
            "FI"
        ]
    },
    {
        "alias": "threadingservices",
        "title": "Threading Services",
        "parents": [
            "hairremoval"
        ]
    },
    {
        "alias": "thrift_stores",
        "title": "Thrift Stores",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "tickets",
        "title": "Tickets",
        "parents": [
            "shopping"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "PL",
            "DK",
            "CL",
            "NO",
            "FI",
            "PT"
        ]
    },
    {
        "alias": "ticketsales",
        "title": "Ticket Sales",
        "parents": [
            "arts"
        ],
        "country_blacklist": [
            "NZ",
            "SE",
            "PL",
            "TR",
            "GB",
            "IE",
            "SG",
            "NL",
            "FI",
            "ES"
        ]
    },
    {
        "alias": "tikibars",
        "title": "Tiki Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "PL",
            "TR",
            "AT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "tiling",
        "title": "Tiling",
        "parents": [
            "homeservices"
        ],
        "country_blacklist": [
            "JP",
            "MY",
            "PL",
            "TR",
            "BE",
            "GB",
            "IE",
            "PH",
            "TW",
            "NL",
            "FI",
            "PT",
            "HK",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "tires",
        "title": "Tires",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "titleloans",
        "title": "Title Loans",
        "parents": [
            "financialservices"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "tobaccoshops",
        "title": "Tobacco Shops",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "tofu",
        "title": "Tofu Shops",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "tonkatsu",
        "title": "Tonkatsu",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "torshi",
        "title": "Torshi",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "tortillas",
        "title": "Tortillas",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "tours",
        "title": "Tours",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "towing",
        "title": "Towing",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "towncarservice",
        "title": "Town Car Service",
        "parents": [
            "transport"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "MY",
            "BE",
            "IE",
            "GB",
            "PH",
            "SG",
            "TW",
            "NL",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "townhall",
        "title": "Town Hall",
        "parents": [
            "publicservicesgovt"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "MY",
            "PL",
            "GB",
            "IE",
            "PH",
            "SG",
            "TW",
            "FI",
            "HK",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "toxicologists",
        "title": "Toxicologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "toys",
        "title": "Toy Stores",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "tradamerican",
        "title": "American (Traditional)",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "tradclothing",
        "title": "Traditional Clothing",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "tradefairs",
        "title": "Trade Fairs",
        "parents": [
            "festivals"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "JP",
            "TR",
            "AT",
            "BE",
            "DK",
            "NO",
            "DE",
            "CH",
            "NL",
            "MX",
            "FI",
            "PT",
            "IT"
        ]
    },
    {
        "alias": "traditional_swedish",
        "title": "Traditional Swedish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "SE"
        ]
    },
    {
        "alias": "trafficschools",
        "title": "Traffic Schools",
        "parents": [
            "specialtyschools"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "trafficticketinglaw",
        "title": "Traffic Ticketing Law",
        "parents": [
            "lawyers"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "trailerdealers",
        "title": "Trailer Dealers",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "DK",
            "GB",
            "IE",
            "NO",
            "DE",
            "SG",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "trailerrental",
        "title": "Trailer Rental",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "trailerrepair",
        "title": "Trailer Repair",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "AU",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "DE",
            "NO",
            "CH",
            "SG",
            "BR"
        ]
    },
    {
        "alias": "trains",
        "title": "Trains",
        "parents": [
            "transport"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "MY",
            "TR",
            "PH",
            "CL",
            "SG",
            "TW",
            "MX",
            "FI",
            "HK",
            "IT",
            "ES"
        ]
    },
    {
        "alias": "trainstations",
        "title": "Train Stations",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "trampoline",
        "title": "Trampoline Parks",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "MY",
            "PH",
            "CL",
            "SG",
            "TW",
            "MX",
            "HK",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "translationservices",
        "title": "Translation Services",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "SE"
        ]
    },
    {
        "alias": "transmissionrepair",
        "title": "Transmission Repair",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "MY",
            "AT",
            "PH",
            "IT",
            "DE",
            "CH"
        ]
    },
    {
        "alias": "transport",
        "title": "Transportation",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "tras_os_montes",
        "title": "Tras-os-Montes",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "trattorie",
        "title": "Trattorie",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "AR",
            "PL",
            "IT",
            "CL",
            "CH"
        ]
    },
    {
        "alias": "travelagents",
        "title": "Travel Agents",
        "parents": [
            "travelservices"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "travelservices",
        "title": "Travel Services",
        "parents": [
            "hotelstravel"
        ]
    },
    {
        "alias": "treeservices",
        "title": "Tree Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "trinidadian",
        "title": "Trinidadian",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "triviahosts",
        "title": "Trivia Hosts",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "trophyshops",
        "title": "Trophy Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "NZ",
            "SE",
            "FI",
            "TR",
            "SG",
            "BR"
        ]
    },
    {
        "alias": "tropicalmedicine",
        "title": "Tropical Medicine",
        "parents": [
            "physicians"
        ],
        "country_whitelist": [
            "NL",
            "AT",
            "BE",
            "IT",
            "DE",
            "CH",
            "BR"
        ]
    },
    {
        "alias": "truck_rental",
        "title": "Truck Rental",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "NL",
            "SE",
            "FI",
            "TR"
        ]
    },
    {
        "alias": "truckdealers",
        "title": "Commercial Truck Dealers",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "SE",
            "FI",
            "TR",
            "HK",
            "TW"
        ]
    },
    {
        "alias": "truckrepair",
        "title": "Commercial Truck Repair",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "NZ",
            "PL",
            "AT",
            "BE",
            "GB",
            "NL",
            "CA",
            "IT",
            "AU",
            "AR",
            "US",
            "MY",
            "DK",
            "IE",
            "PH",
            "CL",
            "NO",
            "DE",
            "CH",
            "SG",
            "FR",
            "MX",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "tubing",
        "title": "Tubing",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "tuina",
        "title": "Tui Na",
        "parents": [
            "tcm"
        ]
    },
    {
        "alias": "turkish",
        "title": "Turkish",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "turkishravioli",
        "title": "Turkish Ravioli",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "tuscan",
        "title": "Tuscan",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT",
            "US"
        ]
    },
    {
        "alias": "tutoring",
        "title": "Tutoring Centers",
        "parents": [
            "education"
        ]
    },
    {
        "alias": "tvmounting",
        "title": "TV Mounting",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "NL",
            "BE",
            "IT"
        ]
    },
    {
        "alias": "udon",
        "title": "Udon",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP",
            "SE",
            "FI",
            "HK",
            "DK",
            "NO",
            "TW"
        ]
    },
    {
        "alias": "ukrainian",
        "title": "Ukrainian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK",
            "TR",
            "ES"
        ]
    },
    {
        "alias": "ultrasoundimagingcenters",
        "title": "Ultrasound Imaging Centers",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "unagi",
        "title": "Unagi",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "underseamedicine",
        "title": "Undersea/Hyperbaric Medicine",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "uniforms",
        "title": "Uniforms",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "CZ",
            "JP",
            "SE",
            "TR",
            "AT",
            "IE",
            "CH",
            "NL"
        ]
    },
    {
        "alias": "university_housing",
        "title": "University Housing",
        "parents": [
            "realestate"
        ]
    },
    {
        "alias": "unofficialyelpevents",
        "title": "Unofficial Yelp Events",
        "parents": [
            "localflavor"
        ]
    },
    {
        "alias": "urgent_care",
        "title": "Urgent Care",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "urologists",
        "title": "Urologists",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "usedbooks",
        "title": "Used Bookstore",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "TR",
            "AU",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "usedcardealers",
        "title": "Used Car Dealers",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "utilities",
        "title": "Utilities",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "CZ",
            "US",
            "PL",
            "BE",
            "GB",
            "SG",
            "NL",
            "PT",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "uzbek",
        "title": "Uzbek",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "US"
        ]
    },
    {
        "alias": "vacation_rentals",
        "title": "Vacation Rentals",
        "parents": [
            "hotelstravel"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "vacationrentalagents",
        "title": "Vacation Rental Agents",
        "parents": [
            "hotelstravel"
        ],
        "country_blacklist": [
            "SG",
            "ES"
        ]
    },
    {
        "alias": "valetservices",
        "title": "Valet Services",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "BR",
            "TR",
            "US"
        ]
    },
    {
        "alias": "vapeshops",
        "title": "Vape Shops",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "SG",
            "BR"
        ]
    },
    {
        "alias": "vascularmedicine",
        "title": "Vascular Medicine",
        "parents": [
            "physicians"
        ]
    },
    {
        "alias": "vegan",
        "title": "Vegan",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "vegetarian",
        "title": "Vegetarian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "vehicleshipping",
        "title": "Vehicle Shipping",
        "parents": [
            "auto"
        ]
    },
    {
        "alias": "vehiclewraps",
        "title": "Vehicle Wraps",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "TR",
            "FR",
            "BE"
        ]
    },
    {
        "alias": "venetian",
        "title": "Venetian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "IT"
        ]
    },
    {
        "alias": "venezuelan",
        "title": "Venezuelan",
        "parents": [
            "latin"
        ],
        "country_whitelist": [
            "FR",
            "AR",
            "US",
            "PT",
            "CA",
            "CL",
            "ES"
        ]
    },
    {
        "alias": "venison",
        "title": "Venison",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "PL",
            "DK",
            "GB",
            "IE",
            "NO",
            "SG",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "venues",
        "title": "Venues & Event Spaces",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "vermouthbars",
        "title": "Vermouth Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "JP",
            "PL",
            "TR",
            "DK",
            "NO",
            "FR",
            "IT",
            "BR"
        ]
    },
    {
        "alias": "vet",
        "title": "Veterinarians",
        "parents": [
            "pets"
        ]
    },
    {
        "alias": "veteransorganizations",
        "title": "Veterans Organizations",
        "parents": [
            "social_clubs"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "videoandgames",
        "title": "Videos & Video Game Rental",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "videofilmproductions",
        "title": "Video/Film Production",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "videogamestores",
        "title": "Video Game Stores",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "videographers",
        "title": "Videographers",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "vietnamese",
        "title": "Vietnamese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "vintage",
        "title": "Used, Vintage & Consignment",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "vinyl_records",
        "title": "Vinyl Records",
        "parents": [
            "media"
        ]
    },
    {
        "alias": "vinylsiding",
        "title": "Siding",
        "parents": [
            "homeservices"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "SE",
            "BE",
            "DK",
            "IE",
            "GB",
            "NO",
            "SG",
            "NL",
            "CA",
            "AU"
        ]
    },
    {
        "alias": "virtualrealitycenters",
        "title": "Virtual Reality Centers",
        "parents": [
            "arts"
        ]
    },
    {
        "alias": "visitorcenters",
        "title": "Visitor Centers",
        "parents": [
            "travelservices"
        ]
    },
    {
        "alias": "vitaminssupplements",
        "title": "Vitamins & Supplements",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "PH",
            "MY"
        ]
    },
    {
        "alias": "vocalcoach",
        "title": "Vocal Coach",
        "parents": [
            "musicinstrumentservices"
        ]
    },
    {
        "alias": "vocation",
        "title": "Vocational & Technical School",
        "parents": [
            "specialtyschools"
        ]
    },
    {
        "alias": "volleyball",
        "title": "Volleyball",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "JP",
            "SE",
            "AT",
            "DK",
            "NO",
            "DE",
            "SG",
            "FR",
            "FI",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "waffles",
        "title": "Waffles",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "waldorfschools",
        "title": "Waldorf Schools",
        "parents": [
            "education"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "walkinclinics",
        "title": "Walk-in Clinics",
        "parents": [
            "medcenters"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "IT",
            "DE"
        ]
    },
    {
        "alias": "walkingtours",
        "title": "Walking Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "wallpapering",
        "title": "Wallpapering",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "watch_repair",
        "title": "Watch Repair",
        "parents": [
            "localservices"
        ]
    },
    {
        "alias": "watches",
        "title": "Watches",
        "parents": [
            "shopping"
        ]
    },
    {
        "alias": "waterdelivery",
        "title": "Water Delivery",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "US",
            "MY",
            "HK",
            "CA",
            "PH",
            "BR"
        ]
    },
    {
        "alias": "waterheaterinstallrepair",
        "title": "Water Heater Installation/Repair",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "waterparks",
        "title": "Water Parks",
        "parents": [
            "active"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "MY",
            "AT",
            "GB",
            "IE",
            "CL",
            "DE",
            "CH",
            "FI",
            "HK",
            "AU"
        ]
    },
    {
        "alias": "waterproofing",
        "title": "Waterproofing",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "waterpurification",
        "title": "Water Purification Services",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "waterstores",
        "title": "Water Stores",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "MX",
            "BR",
            "CA",
            "US"
        ]
    },
    {
        "alias": "watersuppliers",
        "title": "Water Suppliers",
        "parents": [
            "utilities"
        ]
    },
    {
        "alias": "watertaxis",
        "title": "Water Taxis",
        "parents": [
            "transport"
        ],
        "country_whitelist": [
            "NZ",
            "MX",
            "IE",
            "GB",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "waxing",
        "title": "Waxing",
        "parents": [
            "hairremoval"
        ]
    },
    {
        "alias": "web_design",
        "title": "Web Design",
        "parents": [
            "professional"
        ]
    },
    {
        "alias": "wedding_planning",
        "title": "Wedding Planning",
        "parents": [
            "eventservices"
        ]
    },
    {
        "alias": "weddingchappels",
        "title": "Wedding Chapels",
        "parents": [
            "eventservices"
        ],
        "country_whitelist": [
            "AU",
            "JP",
            "US"
        ]
    },
    {
        "alias": "weightlosscenters",
        "title": "Weight Loss Centers",
        "parents": [
            "health"
        ]
    },
    {
        "alias": "welldrilling",
        "title": "Well Drilling",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "PL",
            "AT",
            "IT",
            "CZ",
            "AR",
            "US",
            "MY",
            "DK",
            "PH",
            "CL",
            "DE",
            "NO",
            "CH",
            "MX",
            "BR",
            "ES"
        ]
    },
    {
        "alias": "westernjapanese",
        "title": "Western Style Japanese Food",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "whalewatchingtours",
        "title": "Whale Watching Tours",
        "parents": [
            "tours"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "wheelrimrepair",
        "title": "Wheel & Rim Repair",
        "parents": [
            "auto"
        ],
        "country_whitelist": [
            "PT",
            "IT",
            "US"
        ]
    },
    {
        "alias": "whiskeybars",
        "title": "Whiskey Bars",
        "parents": [
            "bars"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "wholesale_stores",
        "title": "Wholesale Stores",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "CH",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "wholesalers",
        "title": "Wholesalers",
        "parents": [
            "professional"
        ],
        "country_blacklist": [
            "CZ",
            "SE",
            "MY",
            "TR",
            "PH",
            "TW",
            "FR",
            "FI",
            "PT",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "wigs",
        "title": "Wigs",
        "parents": [
            "shopping"
        ],
        "country_blacklist": [
            "NZ",
            "JP",
            "SE",
            "MY",
            "TR",
            "AT",
            "GB",
            "IE",
            "PH",
            "CH",
            "SG",
            "TW",
            "HK",
            "BR"
        ]
    },
    {
        "alias": "wildlifecontrol",
        "title": "Wildlife Control",
        "parents": [
            "localservices"
        ],
        "country_blacklist": [
            "JP"
        ]
    },
    {
        "alias": "wildlifehunting",
        "title": "Wildlife Hunting Ranges",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "willstrustsprobates",
        "title": "Wills, Trusts, & Probates",
        "parents": [
            "estateplanning"
        ],
        "country_whitelist": [
            "NZ",
            "US",
            "BE",
            "IE",
            "GB",
            "SG",
            "NL",
            "CA",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "windowsinstallation",
        "title": "Windows Installation",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "windowwashing",
        "title": "Window Washing",
        "parents": [
            "homeservices"
        ]
    },
    {
        "alias": "windshieldinstallrepair",
        "title": "Windshield Installation & Repair",
        "parents": [
            "auto"
        ],
        "country_blacklist": [
            "CH",
            "CZ",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "wine_bars",
        "title": "Wine Bars",
        "parents": [
            "bars"
        ]
    },
    {
        "alias": "wineries",
        "title": "Wineries",
        "parents": [
            "food",
            "arts"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "winetasteclasses",
        "title": "Wine Tasting Classes",
        "parents": [
            "tastingclasses"
        ]
    },
    {
        "alias": "winetastingroom",
        "title": "Wine Tasting Room",
        "parents": [
            "wineries"
        ]
    },
    {
        "alias": "winetours",
        "title": "Wine Tours",
        "parents": [
            "tours"
        ]
    },
    {
        "alias": "wok",
        "title": "Wok",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "NZ",
            "AR",
            "JP",
            "US",
            "PL",
            "TR",
            "GB",
            "IE",
            "SG",
            "TW",
            "HK",
            "CA",
            "IT",
            "BR",
            "AU"
        ]
    },
    {
        "alias": "womenscloth",
        "title": "Women's Clothing",
        "parents": [
            "fashion"
        ]
    },
    {
        "alias": "workerscomplaw",
        "title": "Workers Compensation Law",
        "parents": [
            "lawyers"
        ],
        "country_blacklist": [
            "CH",
            "FR",
            "AT",
            "DE"
        ]
    },
    {
        "alias": "wraps",
        "title": "Wraps",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CZ",
            "SE",
            "US",
            "PT",
            "TR",
            "DK",
            "NO"
        ]
    },
    {
        "alias": "xmasmarkets",
        "title": "Christmas Markets",
        "parents": [
            "festivals"
        ],
        "country_blacklist": [
            "NZ",
            "US",
            "TR",
            "SG",
            "IE",
            "CA",
            "BR"
        ]
    },
    {
        "alias": "yakiniku",
        "title": "Yakiniku",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "yakitori",
        "title": "Yakitori",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "yelpevents",
        "title": "Yelp Events",
        "parents": [
            "localflavor"
        ]
    },
    {
        "alias": "yoga",
        "title": "Yoga",
        "parents": [
            "fitness"
        ]
    },
    {
        "alias": "youth_club",
        "title": "Youth Club",
        "parents": [
            "localservices"
        ],
        "country_whitelist": [
            "NZ",
            "SE",
            "BE",
            "GB",
            "NL",
            "PT",
            "CA",
            "IT",
            "AU",
            "CZ",
            "DK",
            "IE",
            "DE",
            "NO",
            "CH",
            "SG",
            "FR",
            "FI"
        ]
    },
    {
        "alias": "yucatan",
        "title": "Yucatan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "yugoslav",
        "title": "Yugoslav",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "SE",
            "PT",
            "BE",
            "IT",
            "AU"
        ]
    },
    {
        "alias": "zapiekanka",
        "title": "Zapiekanka",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "PL"
        ]
    },
    {
        "alias": "zipline",
        "title": "Ziplining",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "zoos",
        "title": "Zoos",
        "parents": [
            "active"
        ]
    },
    {
        "alias": "zorbing",
        "title": "Zorbing",
        "parents": [
            "active"
        ],
        "country_whitelist": [
            "CZ",
            "NZ",
            "US",
            "MX",
            "PT",
            "ES"
        ]
    }
]
Vue.component("get-preferences", {
    template: `
    <div>
        <button type="submit" @click="showPreferences = !showPreferences">Preferences</button>
        <div v-show="showPreferences" id="preferences">
            <div id="macro-pref-btn">
                <button id="categories-button" class="preferences-button" type="submit" @click="showCategories = !showCategories ; showPrice = false ; showRating = false ; showRange = false ; showFrequency = false">categories</button>
                <button class="preferences-button" type="submit" @click="showPrice = !showPrice ; showRating = false ; showRange = false ; showCategories = false ; showFrequency = false">$</button>
                <button class="preferences-button" type="submit" @click="showRating = !showRating ; showPrice = false ; showRange = false ; showCategories = false ; showFrequency = false">&#9733;</button>
                <button class="preferences-button" type="submit" @click="showRange = !showRange ; showPrice = false ; showRating = false ; showCategories = false ; showFrequency = false">mi.</button>
                <button class="preferences-button" type="submit" @click="showFrequency = !showFrequency ; showPrice = false ; showRating = false ; showCategories = false ; showRange = false">#</button>
            </div>

            <div v-show="showCategories" id="category-div">
                <div v-for="(category, index) in categoryFilter" :key="category.alias">
                    <input :id="'category' + index" v-model="selectedCategories" type="checkbox" :value="category.alias">
                    <label :for="'category' + index">{{ category.title }}</label> 
                </div>
            </div>
            <div v-show="showPrice" id="price">
                <input v-model="currentUser.price" type="radio" name="price" value="1"> $</input><br>
                <input v-model="currentUser.price" type="radio" name="price" value="2"> $$</input><br>
                <input v-model="currentUser.price" type="radio" name="price" value="3"> $$$</input><br>
                <input v-model="currentUser.price" type="radio" name="price" value="4"> $$$$</input><br>
            </div>
            <div v-show="showRating" id="rating">
                <input v-model="currentUser.rating" type="radio" name="rating" value="1">&#9734;</input><br>
                <input v-model="currentUser.rating" type="radio" name="rating" value="2">&#9734;&#9734;</input><br>
                <input v-model="currentUser.rating" type="radio" name="rating" value="3">&#9734;&#9734;&#9734;</input><br>
                <input v-model="currentUser.rating" type="radio" name="rating" value="4">&#9734;&#9734;&#9734;&#9734;</input><br>
                <input v-model="currentUser.rating" type="radio" name="rating" value="5">&#9734;&#9734;&#9734;&#9734;&#9734;</input><br>
            </div>
            <div v-show="showRange" id="distance">
                <input v-model="currentUser.distance" v-on:scroll.passive="slider" type="range" min="1" max="25" value="2.5">  {{ currentUser.distance }}</input>                
            </div>
            <div v-show="showFrequency" id="frequency">
                <input type="text" placeholder="dineout frequency" v-model="currentUser.frequency">frequency</input>
            </div>
            <br>
            <div id="submit-btn">
                <button id="submit-changes-button" type="submit" @click="submitPreferences">submit changes</button>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            showPreferences: false,
            showPrice: false,
            showRating: false,
            showRange: false,
            showCategories: false,
            showFrequency: false,
            categories: categories,
            selectedCategories: [],
        }
    },
    props: ['current-user'],
    watch: {
        currentUser: function () {
            this.selectedCategories = this.currentUser.categories.split(",")
        }
    },
    computed: {
        slider: function () {
            return this.currentUser.distance
        },
        categoryFilter: function () {
            return this.categories.filter(category => category.parents.includes("restaurants"))
        },
        categoriesToString: function () {
            return this.selectedCategories.join(",") 
        },
        clearCategories: function () {
            if (this.categoriesToString[0] === ',') {
                return this.categoriesToString.replace(',', '') 
            }
            else {
                return this.categoriesToString
            }
        }
    },
    methods: {
        submitPreferences: function () {
            axios({
                method: "patch",
                url: `/api/v1/users/${this.currentUser.id}/`,
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    price: this.currentUser.price,
                    rating: this.currentUser.rating,
                    distance: this.currentUser.distance,
                    categories: this.clearCategories,
                    frequency: this.currentUser.frequency
                },
            }).then(response => {
                this.$parent.getCurrentUser()
            })  
        },
    },
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    },
})
Vue.component("get-places", {
    template: `
    <div id="get-places">
        <button type="submit" @click="showPlaceSearch = !showPlaceSearch">Restaurants</button>
        <div v-show="showPlaceSearch" id="places">
            <div id="search-rest-btn">
                <button type="submit" @click="places = [] ; getPlaces() ; showPlaces = !showPlaces ; showButtons = !showButtons">Search</button> 
                <div>
                    <label for="sort_by">Sort by:</label>
                    <select v-model="sort_by" name="sort_by">
                        <option value="best_match">best match</option>
                        <option value="rating">rating</option>
                        <option value="review_count">review count</option>
                        <option value="distance">distance</option>
                    </select>
                </div>
            </div>
            <div v-show="showButtons">
                <button v-show="showHide" @click="showPlaces = !showPlaces ; showShow = !showShow ; showHide = !showHide" type="submit" id="hide-places">hide places</button>
                <button v-show="showShow" @click="showPlaces = !showPlaces ; showShow = !showShow ; showHide = !showHide" type="submit" id="hide-places">show places</button>
            </div>
            <div v-show="showPlaces" id="places">
                <div v-for="place in userPlaces" :key="place.id">
                    <p>{{ place.name }} {{ place.rating }} {{ place.price }}</p>
                </div>
                <button type="submit" @click="submitPlaces">Submit your restaurants</button>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            showButtons: false,
            showHide: true,
            showShow: false,
            showPlaces: false,
            showPlaceSearch: false,
            places: [],
            userPlaces: [],
            sort_by: "best_match",
        }
    },
    props: ['current-user'],
    computed: {
        strToInt: function () {
            return parseInt(this.currentUser.distance * 1600) 
        },
    },
    methods: {
        getPlaces: function () {
            axios({
                method: 'get',
                url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
                headers: {
                    Authorization: "Bearer eVtmegeYiRYnDl2BqqK31pjTCr4NjXJpS-pqNuFvobocPBHYmivDyghMjZ2xJJncuyXf4KW9iY4efs53hlGeNgCqIOSZNnZqrrDNTtQv2juo_rPjNPTczpMDGozrX3Yx",
                },
                params: {
                    latitude: this.currentUser.lat,
                    longitude: this.currentUser.lng,
                    radius: this.strToInt,
                    categories: this.currentUser.categories,
                    limit: 50,
                    offset: 50
                }
            }).then(response => {
                this.places = response.data.businesses
                console.log(this.places) 
                this.sortPlaces()
            })
        },
        sortPlaces: function () {
            this.userPlaces = []
            let nums = []
            for (let i=0; i<parseInt(this.currentUser.frequency); i++) {
                let num = Math.floor((Math.random() * (this.places.length - 1)))
                while (true) {
                    if (nums.includes(num)) {
                        num = Math.floor((Math.random() * (this.places.length - 1)))
                    }
                    else {
                        nums.push(num)
                    } 
                    break
                }
            }
            for (let i=0; i<nums.length; i++) {
                let place = this.places[nums[i]] 
                this.userPlaces.push(place)
            }   
        },
        submitPlaces: function () {
            console.log(this.userPlaces)
            for (let i=0; i<this.userPlaces.length; i++) {
                axios({
                    method: 'post',
                    url: `/api/v1/restaurants/`,
                    headers: {
                        'X-CSRFToken': this.csrf_token
                    },
                    data: {
                        user: this.currentUser.id,
                        restaurant: this.userPlaces[i].name,
                        restaurant_id: this.userPlaces[i].id
                    },
                }) 
            }
        }
    },
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    },

})