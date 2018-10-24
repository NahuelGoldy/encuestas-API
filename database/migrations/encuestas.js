exports.up = function(knex, Promise) {
    return knex.schema.createTable('encuestas', table =>{
        table.increments('id').primary();
        table.string('genero').nullable();
        table.string('edad').nullable();
        table.string('pais').notNullable();
        table.string('region').notNullable();
        table.string('moneda_local').notNullable();
        table.string('anios_exp_total').notNullable().defaultTo('0');
        table.string('anios_exp_puesto').notNullable().defaultTo('0');
        table.integer('cant_a_cargo').notNullable().defaultTo(0);
        table.string('estudios').notNullable();
        table.string('estado_estudios').notNullable();
        table.string('carrera').nullable();
        table.string('realizaste_cursos').notNullable();
        table.string('puesto').notNullable();
        table.string('tecnologias_1').nullable();
        table.string('tecnologias_2').nullable();
        table.string('tecnologias_3').nullable();
        table.string('tecnologias_4').nullable();
        table.string('tecnologias_5').nullable();
        table.string('funcional_o_automation').nullable();
        table.string('haces_guardias').nullable().defaultTo('No');
        table.decimal('remuneracion_guardia', 15, 2).nullable();
        table.string('tipo_remuneracion_guardia').nullable();
        table.string('tipo_contrato').nullable();
        table.decimal('salario_mensual', 15, 2);
        table.string('bruto_o_neto').notNullable();
        table.string('conformidad_sueldo').notNullable();
        table.string('conformidad_sueldo_anterior').notNullable();
        table.string('recibis_bono').notNullable();
        table.string('bono_sujeto_a').notNullable();
        table.string('ajustes_por_inflacion').notNullable();
        table.decimal('porcentaje_ajuste_inflacion', 2, 2);
        table.string('cantidad_empleados').nullable();
        table.boolean('cambiaste_empresa_ultimos_6_meses');
        table.string('motivo_cambio_empresa').nullable();
        table.string('beneficios').nullable();
        table.timestamps(true, true)
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('encuestas');
};