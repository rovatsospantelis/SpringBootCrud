<template>
  <el-dialog type="warning" title="Διαχείριση Χρήστη" :visible="visible" :modal="true"
             :close-on-click-modal="false"
             :close-on-press-escape="false" :modal-append-to-body="false" :show-close="false" width="75%"
             @close="clearValidation">

    <el-card>
    <el-form ref="personForm" :model="person" :rules="rules" label-position="top">

      <el-row :gutter="20">
        <!-- LEFT COLUMN -->
        <el-col :span="12"> 

          <el-form-item label="Εισάγετε το όνομα"
                        prop="name">
            <el-input prefix-icon="fa fa-user"
                      v-model="person.name"
                      placeholder="Όνομα"
                      autoComplete="name">
            </el-input>
          </el-form-item>

          <el-form-item label="Εισάγετε αριθμό κινητού τηλεφώνου"
                        prop="mobilePhone">
            <el-input prefix-icon="fa fa-phone"
                      v-model="person.mobilePhone"
                      placeholder="Κινητό Τηλέφωνο"
                      autoComplete="tel">
            </el-input>
          </el-form-item>

          <el-form-item label="Εισάγετε τη διεύθυνση Email"
                        prop="email">
            <el-input prefix-icon="fa fa-envelope"
                      v-model="person.email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email">
            </el-input>
          </el-form-item>

        </el-col>

        <!-- RIGHT COLUMN -->
        <el-col :span="12">

          <el-form-item label="Συμπληρώστε προαιρετικά σχόλια"
                        prop="comments">
            <el-input type="textarea"
                      :rows="3"
                      prefix-icon="fa fa-comment-o"
                      v-model="person.comments"
                      placeholder="Σχόλια">
            </el-input>
          </el-form-item>

          <el-form-item label="Επιλέξτε Φύλλο" prop="gender">
            <template>
              <el-select v-model="person.gender"
                         placeholder="Φύλλο"
                         value-key="id"
                         filterable
                         clearable>
                <el-option
                  v-for="item in genderOptions"
                  :key="item.id"
                  :label="item.title"
                  :value="item">
                </el-option>
              </el-select>
            </template>
          </el-form-item>

          <el-form-item prop="active">
            <template>
              <el-checkbox v-model="person.active">Ενεργό</el-checkbox>
            </template>
          </el-form-item>

        </el-col>
      </el-row>

    </el-form>

      <el-row>
        <el-col style="text-align: right">
          <el-button type="success"
                     icon="fa fa-save"
                     @click="save"> Αποθήκευση </el-button>

          <el-button type="danger"
                     icon="fa fa-remove"
                     @click="confirmDelete"
                     :disabled="!isDeletable"> Διαγραφή </el-button>
        </el-col>
      </el-row>
    </el-card>

    <div slot="footer" class="dialog-footer card-footer">
      <el-button type="warning"
                 icon="el-icon-back"
                 @click="cancel"> Επιστροφή </el-button>
    </div>

  </el-dialog>
</template>
<script src="./PersonVM.js"></script>
