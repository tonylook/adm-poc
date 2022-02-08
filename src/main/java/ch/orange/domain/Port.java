package ch.orange.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 * A Port.
 */
@Entity
@Table(name = "port")
public class Port implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "loding_time")
    private Long lodingTime;

    @Column(name = "unloading_time")
    private Long unloadingTime;

    @Column(name = "waiting_time")
    private Float waitingTime;

    @OneToMany(mappedBy = "port")
    @JsonIgnoreProperties(value = { "port" }, allowSetters = true)
    private Set<PurchaseContract> purchaseContracts = new HashSet<>();

    @OneToMany(mappedBy = "port")
    @JsonIgnoreProperties(value = { "port" }, allowSetters = true)
    private Set<SaleContract> saleContracts = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Port id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getLodingTime() {
        return this.lodingTime;
    }

    public Port lodingTime(Long lodingTime) {
        this.setLodingTime(lodingTime);
        return this;
    }

    public void setLodingTime(Long lodingTime) {
        this.lodingTime = lodingTime;
    }

    public Long getUnloadingTime() {
        return this.unloadingTime;
    }

    public Port unloadingTime(Long unloadingTime) {
        this.setUnloadingTime(unloadingTime);
        return this;
    }

    public void setUnloadingTime(Long unloadingTime) {
        this.unloadingTime = unloadingTime;
    }

    public Float getWaitingTime() {
        return this.waitingTime;
    }

    public Port waitingTime(Float waitingTime) {
        this.setWaitingTime(waitingTime);
        return this;
    }

    public void setWaitingTime(Float waitingTime) {
        this.waitingTime = waitingTime;
    }

    public Set<PurchaseContract> getPurchaseContracts() {
        return this.purchaseContracts;
    }

    public void setPurchaseContracts(Set<PurchaseContract> purchaseContracts) {
        if (this.purchaseContracts != null) {
            this.purchaseContracts.forEach(i -> i.setPort(null));
        }
        if (purchaseContracts != null) {
            purchaseContracts.forEach(i -> i.setPort(this));
        }
        this.purchaseContracts = purchaseContracts;
    }

    public Port purchaseContracts(Set<PurchaseContract> purchaseContracts) {
        this.setPurchaseContracts(purchaseContracts);
        return this;
    }

    public Port addPurchaseContract(PurchaseContract purchaseContract) {
        this.purchaseContracts.add(purchaseContract);
        purchaseContract.setPort(this);
        return this;
    }

    public Port removePurchaseContract(PurchaseContract purchaseContract) {
        this.purchaseContracts.remove(purchaseContract);
        purchaseContract.setPort(null);
        return this;
    }

    public Set<SaleContract> getSaleContracts() {
        return this.saleContracts;
    }

    public void setSaleContracts(Set<SaleContract> saleContracts) {
        if (this.saleContracts != null) {
            this.saleContracts.forEach(i -> i.setPort(null));
        }
        if (saleContracts != null) {
            saleContracts.forEach(i -> i.setPort(this));
        }
        this.saleContracts = saleContracts;
    }

    public Port saleContracts(Set<SaleContract> saleContracts) {
        this.setSaleContracts(saleContracts);
        return this;
    }

    public Port addSaleContract(SaleContract saleContract) {
        this.saleContracts.add(saleContract);
        saleContract.setPort(this);
        return this;
    }

    public Port removeSaleContract(SaleContract saleContract) {
        this.saleContracts.remove(saleContract);
        saleContract.setPort(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Port)) {
            return false;
        }
        return id != null && id.equals(((Port) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Port{" +
            "id=" + getId() +
            ", lodingTime=" + getLodingTime() +
            ", unloadingTime=" + getUnloadingTime() +
            ", waitingTime=" + getWaitingTime() +
            "}";
    }
}
