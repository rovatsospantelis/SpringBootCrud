package gr.publicsoft.springbootcrud.model;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.Size;

import static gr.publicsoft.springbootcrud.Constants.SIZE_M;

@Entity
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "companyName is mandatory")
    @Size(max = SIZE_M)
    @Column(nullable = false)
    private String companyName;

    @Size(max = SIZE_M)
    private String firstName;

    @Size(max = SIZE_M)
    private String lastName;

    @NotBlank(message = "vatNumber is mandatory")
    @Size(max = SIZE_M)
    @Column(nullable = false)
    private String vatNumber;

    @Size(max = SIZE_M)
    private String irsOffice;

    @Size(max = SIZE_M)
    private String address;

    @Size(max = SIZE_M)
    private String zipCode;

    @Size(max = SIZE_M)
    private String city;

    @Size(max = SIZE_M)
    private String country;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getVatNumber() {
        return vatNumber;
    }

    public void setVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
    }

    public String getIrsOffice() {
        return irsOffice;
    }

    public void setIrsOffice(String irsOffice) {
        this.irsOffice = irsOffice;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
