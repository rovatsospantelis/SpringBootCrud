package gr.publicsoft.springbootcrud.repository;

import gr.publicsoft.springbootcrud.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:9000")
@RepositoryRestResource
public interface PersonRepository extends JpaRepository<Person, Long> {

    Person findByEmail(String email);

    List<Person> findByIsActive(boolean isActive);

    @Query("SELECT p FROM Person p "
            + "WHERE p.email LIKE CONCAT('%',?1,'%') "
            + "     OR p.name LIKE CONCAT('%',?1,'%')")
    Page<Person> findByQuery(@Param("query") String query, Pageable pageable);

    @Query("SELECT COUNT(p) FROM Person p "
            + "WHERE p.isActive = true "
            + "     AND p.email IS NOT NULL ")
    Long countActiveUsers();
}
