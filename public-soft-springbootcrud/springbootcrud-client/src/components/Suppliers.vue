<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <el-card>
            <div slot="header">
              <i class='icon-suppliers'></i> Προμηθευτές
            </div>
            <el-row>
              <el-col :span="5">
              <el-input
                v-model="query"
                placeholder="Search"
                autoComplete="companyName">
              </el-input>
              </el-col>
              <el-col :span="0.2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
              <el-col :span="12">
              <el-button
                class="el-button--primary"
                @click="refreshSuppliers()">Search</el-button>                                                <!-- ΕΔΩ -->
              </el-col>
            </el-row>
            <el-table
              :data="suppliers"
              stripe
              style="width: 100%"
              @selection-change="onSupplierSelected">
              <el-table-column
                v-for="(field, index) in fields"
                v-bind:key="index"
                :prop="field.name"
                :label="field.title"
                :sortable="true">
              </el-table-column>
              <el-table-column
                label="Operations" width="100">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    class="el-button--warning"
                    @click="onSupplierSelected(scope.row)">Edit</el-button>
                </template>
              </el-table-column>
            </el-table>

            <div style="text-align: right; margin-top: 1em">
              <el-button
                class="el-button--success"
                @click="createSupplier">
                <i class="fa fa-plus"></i>
                Δημιουργία
              </el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <supplier></supplier>
  </div>
</template>
<script src="./SuppliersVM.js"></script>
