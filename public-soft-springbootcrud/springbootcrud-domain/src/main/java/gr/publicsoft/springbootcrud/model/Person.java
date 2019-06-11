package gr.publicsoft.springbootcrud.model;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import static gr.publicsoft.springbootcrud.Constants.*;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Basic(optional = false)
    @NotNull
    @Column(nullable = false)
    private Boolean isActive;

    @NotBlank(message = "Name is mandatory")
    @Size(max = SIZE_M)
    @Column(nullable = false)
    private String name;

    @NotBlank(message = "Email is mandatory")
    @Column(unique = true)
    @Email
    @Size(max = SIZE_M)
    private String email;

    @Size(min = SIZE_XXS, max = SIZE_XS)
    @NotBlank(message = "Mobile phone number is mandatory")
    @Column(nullable = false)
    private String mobilePhone;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Basic
    @Size(max = SIZE_XL)
    private String comments;

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public enum Gender {
        MALE, FEMALE;
    }

    @Override
    public String toString() {
        return "Person{" + "id=" + id + ", name=" + name + ", email=" + email + '}';
    }
}
