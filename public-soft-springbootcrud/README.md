#PublicSoft Coding Project - Junior


##Back-end

I implemented the SupplierRepository Interface, which extends the JpaRepository and gives us a lot of functionality.
I added the queries for the search part of the App, for the Company name and the VAT number as it is asked.
Because of the use of Spring Boot, Spring Data and JPA there is no need to add more code to implement the CRUD operations
or the connection with the database, or even add a controller. 


##Front-end

At the front-end App I created the SupplierVM.js, SuppliersVM.js, Supplier.vue, Suppliers.vue files and made some other
minor additions so that the "Suppliers" section appears under the "Persons" at the App. The only problem that appears
is that in the list of the created suppliers at the App, the "id" is not delivered properly on the front-end and for that 
reason when we try to Edit the selected supplier an exception occurs. 


EDIT: The problem with the Suppliers' id is solved! With a minor fix at the RepositoryConfig Class (springbootcrud - webapp folder) the ids are properly delivered at the app. The corrected fragment of the code lies below.

public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Person.class, Supplier.class);
    }



